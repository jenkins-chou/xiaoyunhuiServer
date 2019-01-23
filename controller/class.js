
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

//获取所有班级数据
router.post('/getAllClass', function (req, res) {
    var sql = "select * from class";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    })
});

//根据id获取用户信息
router.post('/getClass',function (req, res) {
    var class_id = req.body.class_id;//获取请求参数中的user_id
    var sql = "select * from class where class_id = "+class_id;
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});



//添加用户
router.post('/addclass', function (req, res) {

    var sql = "insert into class(class_name,class_create_time,school_id) value (?,?,?)";
    var sqlparams = [
        req.body.class_name,
        req.body.class_create_time,
        req.body.school_id,
    ]
    var sqlQuery = "select * from class where class_name = '" + req.body.class_name+"'";//用于查询是否存在同班级的
    connectDB.query(sqlQuery,function(result){
        console.log(result);
        if(result.data[0]!=null){
            console.log("已经存在班级");
            var resultexist = {
                    "status": "201",
                    "message": "已经存在班级",
                    "data":[]
                }
            return res.jsonp(resultexist);
        }else{
            console.log("可注册班级");
            connectDB.add(sql,sqlparams,function(result){
                console.log(result);
                if (result.status=="200") {
                    var sqlQueryAgain = "select * from class where class_name = '" + req.body.class_name+"'";
                    connectDB.query(sqlQueryAgain,function(resultAgain){
                        return res.jsonp(resultAgain);
                    })
                }else{
                    return res.jsonp(result);
                }
            })
        }
    })
});

//更新用户信息
router.post('/updateclass', function (request, response) {
    var req = request;
    var res = response;
    var class_id = req.body.class_id;

    if (class_id==null) {
        return res.jsonp("class_id is null! please check!");
    }
    //console.log("hahahhah");
    connectDB.query("select * from class where class_id = "+class_id,function(result){
        if (result.status=="200") {
            if (result.data[0]!=null) {
                    var class_name = checkUpdateData(req.body.class_name,result.data[0].class_name);
                    var class_create_time = checkUpdateData(req.body.class_create_time,result.data[0].class_create_time);
                    var school_id = checkUpdateData(req.body.school_id,result.data[0].school_id);
                    var sql  =  "update class set class_name = '"+class_name+"' , class_create_time = '"+class_create_time+"' , school_id = '"+school_id+"' where class_id = "+class_id;
                connectDB.update(sql,function(result){
                    console.log(result);
                    return res.jsonp(result);
                })
            }else{
                return res.jsonp('没有数据');
            }
        }else{
            return res.jsonp('更新失败');
        }
    })
});
router.post('/deleteclass', function (req, res) {
    var class_id = req.body.class_id;
    if (class_id==null) {
        return res.jsonp("class_id is null! please check!");
    }else{
        var sql = "delete class where class_id = "+class_id;
        connectDB.delete(sql,function(result){
            console.log(result);
            return res.jsonp(result);
        })
    }
});
//更新时，用于校验是否是否有更新字段值
function checkUpdateData(target,current){
    if (target == null||target =="") {
        return current;
    }else if(target !=null||target !=""){
        if (target != current) {
            return target;
        }else{
            return current;
        }
    }else{
        return current;
    }
}
// console.log(checkUpdateData("dsadsa","adsadsa"));
// console.log(checkUpdateData("","adsadsa"));
// console.log(checkUpdateData("dsadsa",""));
// console.log(checkUpdateData("",""));
module.exports = router;