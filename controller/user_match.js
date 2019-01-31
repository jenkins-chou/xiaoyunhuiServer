
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

var tableName = "user_match";//表名
var tableKey = "user_match_id";//主键
var tableDelete = "user_match_del";//删除标志位

//获取所有数据
router.post('/getUserMatchs', function (req, res) {
    var sql = "select * from "+tableName+"  where "+tableDelete+" != 'delete'";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    })
});

//根据id获取信息
router.post('/getUserMatch',function (req, res) {
    var sql = "select * from "+tableName+" where "+tableKey+" = "+req.body.user_match_id +" and "+tableDelete+" != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据user_id获取报名信息（获取个人报名的所有项目）
router.post('/getUserMatchByUserId',function (req, res) {
    var sql = "select a.* from "+tableName+" a,matchs b where user_id = "+req.body.user_id +" and "+tableDelete+" != 'delete' and a.match_id = b.match_id and b.match_del != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});


//根据match_id获取报名信息(获取所有user_id)
router.post('/getUserMatchByMatchId',function (req, res) {
    var sql = "select * from "+tableName+" where match_id = "+req.body.match_id +" and "+tableDelete+" != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据match_id获取报名信息(用户详细信息)
router.post('/getUserMatchDetailByMatchId',function (req, res) {
    var sql = "select * from user where user_id = any(select user_id from user_match where match_id = "+req.body.match_id +" and "+tableDelete+" != 'delete')";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });


});

//添加
router.post('/addUserMatch', function (req, res) {
    var sql = "insert into "+tableName+"(user_id,match_id,user_match_del,user_match_status,score_id) value (?,?,?,?,?)";
    var sqlparams = [
        req.body.user_id,
        req.body.match_id,
        'normal', //delete 状态
        req.body.user_match_status,
        req.body.score_id
    ]
    var sqlQuery = "select * from "+tableName+" where user_id = '" + req.body.user_id+"' and match_id = '"+req.body.match_id+"'";//用于查询是否存在同名的
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
                    var sqlQueryAgain = "select * from "+tableName+" where user_id = '" + req.body.user_id+"' and match_id = '"+req.body.match_id+"'";
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
router.post('/updateUserMatch', function (request, response) {
    var req = request;
    var res = response;
    var user_match_id = req.body.user_match_id;

    if (user_match_id==null) {
        return res.jsonp("user_match_id is null! please check!");
    }
    connectDB.query("select * from "+tableName+" where "+tableKey+" = "+user_match_id,function(result){
        if (result.status=="200") {
            if (result.data[0]!=null) {
                console.log(checkUpdateData("dsadsa","adsadsa"));
                    var user_id = checkUpdateData(req.body.user_id,result.data[0].user_id);
                    var match_id = checkUpdateData(req.body.match_id,result.data[0].match_id);
                    var user_match_del = checkUpdateData(req.body.user_match_del,result.data[0].user_match_del);
                    var user_match_status = checkUpdateData(req.body.user_match_status,result.data[0].user_match_status);
                    var score_id = checkUpdateData(req.body.score_id,result.data[0].score_id);
                    var sql  =  "update "+tableName+" set user_id = '"+user_id
                    +"' , match_id = '"+match_id
                    +"' , user_match_del = '"+user_match_del
                    +"' , user_match_status = '"+user_match_status
                    +"' , score_id = '"+score_id
                    +"' where "+tableKey+" = "+user_match_id;
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
router.post('/deleteUserMatch', function (req, res) {
    var user_match_id = req.body.user_match_id;
    if (user_match_id==null) {
        return res.jsonp("user_id is null! please check!");
    }else{
        var sql = "update "+tableName+" set "+tableDelete+" = 'delete' where "+tableKey+" = "+user_match_id;
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