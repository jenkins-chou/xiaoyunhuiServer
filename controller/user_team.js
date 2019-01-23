
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

var tableName = "user_team";//表名
var tableKey = "user_team_id";//主键
var tableDelete = "user_team_del";//删除标志位

//获取所有数据
router.post('/getUserTeams', function (req, res) {
    var sql = "select * from "+tableName+"";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    })
});

//根据id获取信息
router.post('/getUserTeam',function (req, res) {
    var sql = "select * from "+tableName+" where "+tableKey+" = "+req.body.user_team_id +" and "+tableDelete+" != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});



//添加
router.post('/addUserTeam', function (req, res) {
    var sql = "insert into "+tableName+"(user_id,team_id,user_team_del) value (?,?,?)";
    var sqlparams = [
        req.body.user_id,
        req.body.team_id,
        'normal' //user_del 状态
    ]
    var sqlQuery = "select * from "+tableName+" where user_id = '" + req.body.user_id+"' and team_id = '"+req.body.team_id+"'";//用于查询是否存在同名的
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
                    var sqlQueryAgain = "select * from "+tableName+" where user_id = '" + req.body.user_id+"' and team_id = '"+req.body.team_id+"'";
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
router.post('/updateUserTeam', function (request, response) {
    var req = request;
    var res = response;
    var user_team_id = req.body.user_team_id;
    if (user_team_id==null) {
        return res.jsonp("user_team_id is null! please check!");
    }
    //console.log("hahahhah");
    connectDB.query("select * from "+tableName+" where "+tableKey+" = "+user_team_id,function(result){
        if (result.status=="200") {
            if (result.data[0]!=null) {
                console.log(checkUpdateData("dsadsa","adsadsa"));
                    var user_id = checkUpdateData(req.body.user_id,result.data[0].user_id);
                    var team_id = checkUpdateData(req.body.team_id,result.data[0].team_id);
                    var user_team_del = checkUpdateData(req.body.user_team_del,result.data[0].user_team_del);

                    var sql  =  "update "+tableName+" set user_id = '"+user_id
                    +"' , team_id = '"+team_id
                    +"' , user_team_del = '"+user_team_del
                    +"' where "+tableKey+" = "+user_team_id;
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
router.post('/deleteUserteam', function (req, res) {
    var user_team_id = req.body.user_team_id;
    if (user_team_id==null) {
        return res.jsonp("user_team_id is null! please check!");
    }else{
        var sql = "update "+tableName+" set "+tableDelete+" = 'delete' where "+tableKey+" = "+user_team_id;
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