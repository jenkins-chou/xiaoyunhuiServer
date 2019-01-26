
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

var tableName = "match_type";//表名

//获取所有数据
router.post('/getAllMatchType', function (req, res) {
    var sql = "select * from "+tableName+" where match_type_del != 'delete'";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    })
});

router.post('/getMatchType',function (req, res) {
    var match_type_id = req.body.match_type_id;//获取请求参数中的user_id
    var sql = "select * from "+tableName+" where match_type_id = "+match_type_id +" and match_type_del != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});



//添加
router.post('/addMatchType', function (req, res) {
    var sql = "insert into "+tableName+"(match_type_name,match_type_manager,match_type_create_time,match_type_del) value (?,?,?,?)";
    console.log(sql);
    var sqlparams = [
        req.body.match_type_name,
        req.body.match_type_manager,
        req.body.match_type_create_time,
        'normal' //delete 状态
    ]
    var sqlQuery = "select * from "+tableName+" where match_type_name = '" + req.body.match_type_name+"'"+" and match_type_del != 'delete'";//用于查询是否存在同名用户的
    connectDB.query(sqlQuery,function(result){
        console.log(result);
        if(result.data[0]!=null){
            console.log("已经存在相同类型");
            var resultexist = {
                    "status": "201",
                    "message": "已经存在相同类型0",
                    "data":[]
                }
            return res.jsonp(resultexist);
        }else{
            console.log("可注册用户");
            connectDB.add(sql,sqlparams,function(result){
                console.log(result);
                if (result.status=="200") {
                    var sqlQueryAgain = "select * from "+tableName+" where match_type_name = '" + req.body.match_type_name+"'";
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
//更新信息
router.post('/updateMatchType', function (request, response) {
    var req = request;
    var res = response;
    var match_type_id = req.body.match_type_id;
    if (match_type_id==null) {
        return res.jsonp("match_type_id is null! please check!");
    }
    //console.log("hahahhah");
    connectDB.query("select * from "+tableName+" where match_type_id = "+match_type_id,function(result){
        if (result.status=="200") {
            if (result.data[0]!=null) {
                console.log(checkUpdateData("dsadsa","adsadsa"));
                    var match_type_name = checkUpdateData(req.body.match_type_name,result.data[0].match_type_name);
                    var match_type_manager = checkUpdateData(req.body.match_type_manager,result.data[0].match_type_manager);
                    var match_type_create_time = checkUpdateData(req.body.match_type_create_time,result.data[0].match_type_create_time);
                    var sql  =  "update "+tableName+" set match_type_name = '"+match_type_name+"' , match_type_manager = '"+match_type_manager+"' , match_type_create_time = '"+match_type_create_time+"' where match_type_id = "+match_type_id;
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
router.post('/deleteMatchType', function (req, res) {
    var match_type_id = req.body.match_type_id;
    if (match_type_id==null) {
        return res.jsonp("match_type_id is null! please check!");
    }else{
        var sql = "update "+tableName+" set match_type_del = 'delete' where match_type_id = "+match_type_id;
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