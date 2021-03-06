
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();


//获取所有数据
router.post('/getmatchs', function (req, res) {
    var sql = "select * from matchs where match_del != 'delete' order by match_time DESC";
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    })
});

//根据status获取比赛信息
router.post('/getmatchByStatus',function (req, res) {
    var match_status = req.body.match_status;//获取请求参数中的match_id
    var sql = "select * from matchs where match_status = "+match_status +" and match_del != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据id获取比赛信息
router.post('/getmatch',function (req, res) {
    var match_id = req.body.match_id;//获取请求参数中的match_id
    var sql = "select * from matchs where match_id = "+match_id +" and match_del != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据id获取比赛详情信息
router.post('/getmatchDetail',function (req, res) {
    var match_id = req.body.match_id;//获取请求参数中的match_id
    var sql = "select a.*,b.match_type_name,d.user_name,e.* from matchs a,match_type b,referee c,user d,school e where a.match_id = "+match_id +" and a.match_del != 'delete' and a.match_type = b.match_type_id and c.user_id = d.user_id and a.match_referee_id = c.referee_id and a.match_organizers = e.school_id; "
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据类型获取比赛
router.post('/getmatchByType',function (req, res) {
    var match_type = req.body.match_type;//获取请求参数中的match_id
    var sql = "select * from matchs where match_type = '"+match_type +"' and match_del != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据userid获取比赛
router.post('/getmatchByUserId',function (req, res) {
    var user_id = req.body.user_id;//获取请求参数中的match_id
    var sql = "select * FROM matchs where match_del !='delete' and match_id = any(select match_id from user_match where user_id = '"+user_id+"' and user_match_del !='delete')GROUP BY match_id";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据refereeid获取比赛
router.post('/getmatchByRefereeId',function (req, res) {
    var user_id = req.body.user_id;//获取请求参数中的match_id
    var sql = "select * FROM matchs where match_del != 'delete' and match_referee_id = any(select referee_id from referee where user_id = '"+user_id+"')";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据关键字查询比赛
router.post('/searchmatch',function (req, res) {
    var keyword = req.body.keyword;//获取请求参数中的match_id
    var sql = "select * FROM matchs where match_del !='delete' and match_title like '%"+keyword+"%' or match_detail like '%"+keyword+"%' and match_del != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//根据关键字查询比赛
router.post('/excute',function (req, res) {
    var sql = req.body.sql;//获取请求参数中的match_id
    connectDB.excute(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});


//添加比赛
/*match_status：
比赛状态：
1：报名中
2：比赛中
3：比赛完毕
*/
router.post('/addmatch', function (req, res) {
    var sql = "insert into matchs(match_title,match_time,match_create_time,match_referee_id,match_manager,match_abstract,match_detail,match_athletes_num,match_status,match_organizers,match_del,match_type,match_img,match_address) value (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var sqlparams = [
        req.body.match_title,
        req.body.match_time,
        req.body.match_create_time,
        req.body.match_referee_id,
        req.body.match_manager,
        req.body.match_abstract,
        req.body.match_detail,
        req.body.match_athletes_num,
        req.body.match_status,
        req.body.match_organizers,
        'normal',
        req.body.match_type,
        req.body.match_img,
        req.body.match_address
    ]
    connectDB.add(sql,sqlparams,function(result){
        console.log(result);
        return res.jsonp(result);
    })
});
//更新用户信息
router.post('/updatematch', function (request, response) {
    var req = request;
    var res = response;
    var match_id = req.body.match_id;

    if (match_id==null) {
        return res.jsonp("match_id is null! please check!");
    }
    //console.log("hahahhah");
    connectDB.query("select * from matchs where match_id = "+match_id,function(result){
        if (result.status=="200") {
            if (result.data[0]!=null) {
                console.log(checkUpdateData("dsadsa","adsadsa"));
                    var match_title = checkUpdateData(req.body.match_title,result.data[0].match_title);
                    var match_time = checkUpdateData(req.body.match_time,result.data[0].match_time);
                    var match_create_time = checkUpdateData(req.body.match_create_time,result.data[0].match_create_time);
                    var match_referee_id = checkUpdateData(req.body.match_referee_id,result.data[0].match_referee_id);
                    var match_manager = checkUpdateData(req.body.match_manager,result.data[0].match_manager);
                    var match_abstract = checkUpdateData(req.body.match_abstract,result.data[0].match_abstract);
                    var match_detail = checkUpdateData(req.body.match_detail,result.data[0].match_detail);
                    var match_athletes_num = checkUpdateData(req.body.match_athletes_num,result.data[0].match_athletes_num);
                    var match_status = checkUpdateData(req.body.match_status,result.data[0].match_status);
                    var match_organizers = checkUpdateData(req.body.match_organizers,result.data[0].match_organizers);

                    var sql  =  "update matchs set match_title = '"+match_title
                    +"' , match_time = '"+match_time
                    +"' , match_create_time = '"+match_create_time
                    +"' , match_referee_id = '"+match_referee_id
                    +"', match_manager = '"+match_manager
                    +"' , match_abstract = '"+match_abstract
                    +"' , match_detail = '"+match_detail
                    +"' , match_athletes_num = '"+match_athletes_num
                    +"' , match_status = '"+match_status
                    +"' , match_organizers = '"+match_organizers+"' where match_id = "+match_id;
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
router.post('/deletematch', function (req, res) {
    var match_id = req.body.match_id;
    if (match_id==null) {
        return res.jsonp("match_id is null! please check!");
    }else{
        var sql = "update matchs set match_del = 'delete' where match_id = "+match_id;
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