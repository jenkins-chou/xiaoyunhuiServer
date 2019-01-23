
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

var tableName = "tableName";//表名
var tableKey = "tableKey";//主键
var tableDelete = "tableDelete";//删除标志位

//获取所有数据
router.post('/getusers', function (req, res) {
    var sql = "select * from "+tableName+"";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    })
});

//根据id获取信息
router.post('/getuser',function (req, res) {
    var sql = "select * from "+tableName+" where "+tableKey+" = "+req.body.user_id +" and "+tableDelete+" != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});



//添加
router.post('/adduser', function (req, res) {
    var sql = "insert into "+tableName+"(user_name,user_pass,user_real_name,user_avatar_url,user_health,user_phone,user_email,user_address,user_slogan,user_status,user_create_time,user_remark,user_del) value (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var sqlparams = [
        req.body.user_name,
        req.body.user_pass,
        req.body.user_real_name,
        req.body.user_avatar_url,
        req.body.user_health,
        req.body.user_phone,
        req.body.user_email,
        req.body.user_address,
        req.body.user_slogan,
        req.body.user_status,
        req.body.user_create_time,
        req.body.user_remark,
        'normal' //user_del 状态
    ]
    var sqlQuery = "select * from "+tableName+" where user_name = '" + req.body.user_name+"'";//用于查询是否存在同名的
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
                    var sqlQueryAgain = "select * from "+tableName+" where user_name = '" + req.body.user_name+"'";
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
router.post('/updateuser', function (request, response) {
    var req = request;
    var res = response;
    var user_id = req.body.user_id;

    if (user_id==null) {
        return res.jsonp("user_id is null! please check!");
    }
    //console.log("hahahhah");
    connectDB.query("select * from "+tableName+" where "+tableKey+" = "+user_id,function(result){
        if (result.status=="200") {
            if (result.data[0]!=null) {
                console.log(checkUpdateData("dsadsa","adsadsa"));
                    var user_name = checkUpdateData(req.body.user_name,result.data[0].user_name);
                    var user_pass = checkUpdateData(req.body.user_pass,result.data[0].user_pass);
                    var user_real_name = checkUpdateData(req.body.user_real_name,result.data[0].user_real_name);
                    var user_avatar_url = checkUpdateData(req.body.user_avatar_url,result.data[0].user_avatar_url);
                    var user_health = checkUpdateData(req.body.user_health,result.data[0].user_health);
                    var user_phone = checkUpdateData(req.body.user_phone,result.data[0].user_phone);
                    var user_email = checkUpdateData(req.body.user_email,result.data[0].user_email);
                    var user_address = checkUpdateData(req.body.user_address,result.data[0].user_address);
                    var user_slogan = checkUpdateData(req.body.user_slogan,result.data[0].user_slogan);
                    var user_status = checkUpdateData(req.body.user_status,result.data[0].user_status);
                    var user_create_time = checkUpdateData(req.body.user_create_time,result.data[0].user_create_time);
                    var user_remark  = checkUpdateData(req.body.user_remark,result.data[0].user_remark);
                    var user_del = checkUpdateData(req.body.user_del,result.data[0].user_del);
                    var sql  =  "update "+tableName+" set user_name = '"+user_name
                    +"' , user_pass = '"+user_pass
                    +"' , user_real_name = '"+user_real_name
                    +"' , user_avatar_url = '"+user_avatar_url
                    +"', user_health = '"+user_health
                    +"' , user_phone = '"+user_phone
                    +"' , user_email = '"+user_email
                    +"' , user_address = '"+user_address
                    +"' , user_slogan = '"+user_slogan
                    +"' , user_status = '"+user_status
                    +"' , user_create_time = '"+user_create_time
                    +"' , user_remark = '"+user_remark
                    +"' , user_del = '"+user_del
                    +"' where "+tableKey+" = "+user_id;
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
router.post('/deleteuser', function (req, res) {
    var user_id = req.body.user_id;
    if (user_id==null) {
        return res.jsonp("user_id is null! please check!");
    }else{
        var sql = "update "+tableName+" set "+tableDelete+" = 'delete' where "+tableKey+" = "+user_id;
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