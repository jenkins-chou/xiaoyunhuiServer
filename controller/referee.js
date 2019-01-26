
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

var tableName = "referee";//表名

//获取所有数据
router.post('/getReferees', function (req, res) {
    var sql = "select * from "+tableName+" a,User b where a.user_id = b.user_id";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    })
});

//根据id获取信息
router.post('/getReferee',function (req, res) {
    var sql = "select * from "+tableName+" where referee_id = "+req.body.referee_id +" and referee_del != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//添加
router.post('/addReferee', function (req, res) {
    var sql = "insert into "+tableName+"(user_id,referee_status,referee_manager,referee_del) value (?,?,?,?)";
    var sqlparams = [
        req.body.user_id,
        req.body.referee_status,
        req.body.referee_manager,
        'normal' //user_del 状态
    ]
    var sqlQuery = "select * from "+tableName+" where user_id = '" + req.body.user_id+"'";//用于查询是否存在同名的
    connectDB.query(sqlQuery,function(result){
        console.log(result);
        if(result.data[0]!=null){
            console.log("已经存在");
            var resultexist = {
                    "status": "201",
                    "message": "已经存在",
                    "data":[]
                }
            return res.jsonp(resultexist);
        }else{
            console.log("可注册");
            connectDB.add(sql,sqlparams,function(result){
                console.log(result);
                if (result.status=="200") {
                    var sqlQueryAgain = "select * from "+tableName+" where user_id = '" + req.body.user_id+"'";
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
router.post('/updateReferee', function (request, response) {
    var req = request;
    var res = response;
    var referee_id = req.body.referee_id;

    if (referee_id==null) {
        return res.jsonp("referee_id is null! please check!");
    }
    //console.log("hahahhah");
    connectDB.query("select * from "+tableName+" where referee_id = "+referee_id,function(result){
        if (result.status=="200") {
            if (result.data[0]!=null) {
                console.log(checkUpdateData("dsadsa","adsadsa"));
                    var user_id = checkUpdateData(req.body.user_id,result.data[0].user_id);
                    var referee_status = checkUpdateData(req.body.referee_status,result.data[0].referee_status);
                    var referee_manager = checkUpdateData(req.body.referee_manager,result.data[0].referee_manager);
                    var sql  =  "update "+tableName+" set user_id = '"+user_id+"' , referee_status = '"+referee_status+"' , referee_manager = '"+referee_manager+"' where user_id = "+user_id;
                connectDB.update(sql,function(result){
                    console.log(result);
                    return res.jsonp(result);
                })
            }else{
                var result = {
                    "status": "201",
                    "message": "failed"
                }
                return res.jsonp(result);
            }
        }else{
            var result = {
                    "status": "201",
                    "message": "failed"
                }
            return res.jsonp(result);
        }
    })
});
router.post('/deleteReferee', function (req, res) {
    var referee_id = req.body.referee_id;
    if (referee_id==null) {
        return res.jsonp("referee_id is null! please check!");
    }else{
        var sql = "update "+tableName+" set referee_del = 'delete' where referee_id = "+referee_id;
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
module.exports = router;