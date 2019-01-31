
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

var tableName = "team";//表名
var tableKey = "team_id";//主键
var tableDelete = "team_del";//删除标志位

//获取所有数据
router.post('/getTeams', function (req, res) {
    var sql = "select * from "+tableName+"";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    })
});

//根据id获取信息
router.post('/getTeam',function (req, res) {
    var sql = "select * from "+tableName+" where "+tableKey+" = "+req.body.team_id +" and "+tableDelete+" != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据id获取团队详细信息
router.post('/getTeamDetail',function (req, res) {
    var sql = "select a.*,b.* from "+tableName+" a,user b where a."+tableKey+" = "+req.body.team_id +" and a.team_create_user = b.user_id and "+tableDelete+" != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据team_create_user获取团队列表
router.post('/getTeamListByCreater',function (req, res) {
    var sql = "select * from "+tableName+" where team_create_user = "+req.body.team_create_user +" and "+tableDelete+" != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据user_id获取用户参与的团队列表
router.post('/getTeamListByUserId',function (req, res) {
    var sql = "select * from "+tableName+" where team_id = any(select team_id from user_team where user_id = "+req.body.user_id +")";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据user_id获取用户未参与的团队列表
router.post('/getTeamListExceptUserId',function (req, res) {
    var user_id = req.body.user_id;
    var sql = "select * from team where team_create_user != "+user_id+" and team_id != any(select team_id from user_team where user_id = "+user_id+")";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});



//添加
router.post('/addTeam', function (req, res) {
    var sql = "insert into "+tableName+"(team_leader,team_create_time,team_create_user,team_name,team_detail,team_abstract,team_status,team_logo,team_del) value (?,?,?,?,?,?,?,?,?)";
    var sqlparams = [
        req.body.team_leader,
        req.body.team_create_time,
        req.body.team_create_user,
        req.body.team_name,
        req.body.team_detail,
        req.body.team_abstract,
        req.body.team_status,
        req.body.team_logo,
        'normal' //user_del 状态
    ]
    var sqlQuery = "select * from "+tableName+" where team_name = '" + req.body.team_name+"'";//用于查询是否存在同名的
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
                    var sqlQueryAgain = "select * from "+tableName+" where team_name = '" + req.body.team_name+"'";
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
router.post('/updateTeam', function (request, response) {
    var req = request;
    var res = response;
    var team_id = req.body.team_id;

    if (team_id==null) {
        return res.jsonp("team_id is null! please check!");
    }
    //console.log("hahahhah");
    connectDB.query("select * from "+tableName+" where "+tableKey+" = "+team_id,function(result){
        if (result.status=="200") {
            if (result.data[0]!=null) {
                console.log(result.data[0]);
                console.log(checkUpdateData("dsadsa","adsadsa"));
                    var team_leader = checkUpdateData(req.body.team_leader,result.data[0].team_leader);
                    var team_create_time = checkUpdateData(req.body.team_create_time,result.data[0].team_create_time);
                    var team_create_user = checkUpdateData(req.body.team_create_user,result.data[0].team_create_user);
                    var team_name = checkUpdateData(req.body.team_name,result.data[0].team_name);
                    var team_detail = checkUpdateData(req.body.team_detail,result.data[0].team_detail);
                    var team_abstract = checkUpdateData(req.body.team_abstract,result.data[0].team_abstract);
                    var team_status = checkUpdateData(req.body.team_status,result.data[0].team_status);
                    var team_logo = checkUpdateData(req.body.team_logo,result.data[0].team_logo);
                    var team_del = checkUpdateData(req.body.team_del,result.data[0].team_del);

                    var sql  =  "update "+tableName+" set team_leader = '"+team_leader
                    +"' , team_create_time = '"+team_create_time
                    +"' , team_create_user = '"+team_create_user
                    +"' , team_name = '"+team_name
                    +"', team_detail = '"+team_detail
                    +"' , team_abstract = '"+team_abstract
                    +"' , team_status = '"+team_status
                    +"' , team_logo = '"+team_logo
                    +"' , team_del = '"+team_del
                    +"' where team_id = "+team_id;
                    console.log(sql);
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
router.post('/deleteTeam', function (req, res) {
    var team_id = req.body.team_id;
    if (team_id==null) {
        return res.jsonp("user_id is null! please check!");
    }else{
        var sql = "update "+tableName+" set "+tableDelete+" = 'delete' where "+tableKey+" = "+team_id;
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