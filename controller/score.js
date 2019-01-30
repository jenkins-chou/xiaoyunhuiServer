
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

var tableName = "score";//表名
var tableKey = "score_id";//主键
var tableDelete = "score_del";//删除标志位

//获取所有数据
router.post('/getScores', function (req, res) {
    var sql = "select * from "+tableName+"";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    })
});

//根据id获取信息
router.post('/getScore',function (req, res) {
    var sql = "select * from "+tableName+" where "+tableKey+" = "+req.body.score_id +" and "+tableDelete+" != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据user_id获取所有项目
router.post('/getScoreListByUserId',function (req, res) {
    var user_id = req.body.user_id;
    var sql = "select a.*,b.match_title,b.match_time,b.match_athletes_num,b.match_address from user_match a,matchs b where a.user_id = "+user_id +" and a.match_id = b.match_id and a.user_match_del != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据match_id获取所有人员的成绩和个人信息
router.post('/getScoreListByMatchId',function (req, res) {
    var match_id = req.body.match_id;
    var sql = "SELECT a.*,b.* from user a,score b where a.user_id = any(select user_id from score where match_id = "+match_id+") and a.user_id = b.user_id";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});


//根据user_id获取所有已经出成绩的项目
router.post('/getScorePublishListByUserId',function (req, res) {
    var user_id = req.body.user_id;
    var sql = "select a.*,c.* from matchs a,score c WHERE c.user_id = "+user_id+" and a.match_id = c.match_id and c.score_del != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//添加
router.post('/addScore', function (req, res) {
    var sql = "insert into "+tableName+"(match_id,user_id,referee_id,score_value,score_create_time,score_detail,score_remark,score_publish_time,score_del,score_unit) value (?,?,?,?,?,?,?,?,?,?)";
    var sqlparams = [
        req.body.match_id,
        req.body.user_id,
        req.body.referee_id,
        req.body.score_value,
        req.body.score_create_time,
        req.body.score_detail,
        req.body.score_remark,
        req.body.score_publish_time,
        'normal', //user_del 状态
        req.body.score_unit
    ]
    connectDB.add(sql,sqlparams,function(result){
                console.log(result);
                return res.jsonp(result);
    })
});

//批量添加
router.post('/addScores', function (req, res) {
    var sql = req.body.sql;
    var match_id = req.body.match_id;
    var sqlModifyMatch = "update matchs set match_status = '4' where match_id = "+match_id;
    connectDB.excute(sql,function(result){
        console.log(result);
        if (result.status=='200') {
            connectDB.update(sqlModifyMatch,function(resultMatch){
                    console.log(resultMatch);
                    return res.jsonp(resultMatch);
                })
        }else{
            return res.jsonp(result);
        }
        
    })
});

//更新信息
router.post('/updateScore', function (request, response) {
    var req = request;
    var res = response;
    var score_id = req.body.score_id;

    if (score_id==null) {
        return res.jsonp("user_id is null! please check!");
    }
    connectDB.query("select * from "+tableName+" where score_id = "+score_id,function(result){
        if (result.status=="200") {
            if (result.data[0]!=null) {
                console.log(checkUpdateData("dsadsa","adsadsa"));
                    var match_id = checkUpdateData(req.body.match_id,result.data[0].match_id);
                    var user_id = checkUpdateData(req.body.user_id,result.data[0].user_id);
                    var referee_id = checkUpdateData(req.body.referee_id,result.data[0].referee_id);
                    var score_value = checkUpdateData(req.body.score_value,result.data[0].score_value);
                    var score_create_time = checkUpdateData(req.body.score_create_time,result.data[0].score_create_time);
                    var score_detail = checkUpdateData(req.body.score_detail,result.data[0].score_detail);
                    var score_remark = checkUpdateData(req.body.score_remark,result.data[0].score_remark);
                    var score_publish_time = checkUpdateData(req.body.score_publish_time,result.data[0].score_publish_time);
                    var score_del = checkUpdateData(req.body.score_del,result.data[0].score_del);
                    var score_unit = checkUpdateData(req.body.score_unit,result.data[0].score_unit);
                    var sql  =  "update "+tableName
                    +" set match_id = '"+match_id
                    +"' , user_id = '"+user_id
                    +"' , referee_id = '"+referee_id
                    +"' , score_value = '"+score_value
                    +"' , score_create_time = '"+score_create_time
                    +"' , score_detail = '"+score_detail
                    +"' , score_remark = '"+score_remark
                    +"' , score_publish_time = '"+score_publish_time
                    +"' , score_del = '"+score_del
                    +"' , score_unit = '"+score_unit
                    +"' where score_id = "+score_id;
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
router.post('/deleteScore', function (req, res) {
    var score_id = req.body.score_id;
    if (score_id==null) {
        return res.jsonp("score_id is null! please check!");
    }else{
        var sql = "update "+tableName+" set "+tableDelete+" = 'delete' where "+tableKey+" = "+score_id;
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