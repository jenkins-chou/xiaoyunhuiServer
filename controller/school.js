
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

var tableName = "school";//表名
var tableKey = "school_id";//主键
var tableDelete = "school_del";//删除标志位

//获取所有数据
router.post('/getSchools', function (req, res) {
    var sql = "select * from "+tableName+" where school_del !='delete'" ;
    connectDB.query(sql,function(result){
        return res.jsonp(result);
    })
});

//根据id获取信息
router.post('/getSchool',function (req, res) {
    var sql = "select * from "+tableName+" where "+tableKey+" = "+req.body.school_id +" and "+tableDelete+" != 'delete'";
    connectDB.query(sql,function(result){
        console.log(result);
        return res.jsonp(result);
    });
});

//添加
router.post('/addSchool', function (req, res) {
    var sql = "insert into "+tableName+"(school_logo,school_name,school_create_time,school_address,school_manager,school_abstract,school_detail,school_remark,school_del) value (?,?,?,?,?,?,?,?,?)";
    var sqlparams = [
        req.body.school_logo,
        req.body.school_name,
        req.body.school_create_time,
        req.body.school_address,
        req.body.school_manager,
        req.body.school_abstract,
        req.body.school_detail,
        req.body.school_remark,
        'normal' //user_del 状态
    ]
    var sqlQuery = "select * from "+tableName+" where school_name = '" + req.body.school_name+"'";//用于查询是否存在同名的
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
                    var sqlQueryAgain = "select * from "+tableName+" where school_name = '" + req.body.school_name+"'";
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
router.post('/updateSchool', function (request, response) {
    var req = request;
    var res = response;
    var school_id = req.body.school_id;

    if (school_id==null) {
        return res.jsonp("school_id is null! please check!");
    }
    //console.log("hahahhah");
    connectDB.query("select * from "+tableName+" where school_id = "+school_id,function(result){
        if (result.status=="200") {
            if (result.data[0]!=null) {
                console.log(checkUpdateData("dsadsa","adsadsa"));
                    var school_logo = checkUpdateData(req.body.school_logo,result.data[0].school_logo);
                    var school_name = checkUpdateData(req.body.school_name,result.data[0].school_name);
                    var school_create_time = checkUpdateData(req.body.school_create_time,result.data[0].school_create_time);
                    var school_address = checkUpdateData(req.body.school_address,result.data[0].school_address);
                    var school_manager = checkUpdateData(req.body.school_manager,result.data[0].school_manager);
                    var school_abstract = checkUpdateData(req.body.school_abstract,result.data[0].school_abstract);
                    var school_detail = checkUpdateData(req.body.school_detail,result.data[0].school_detail);
                    var school_remark = checkUpdateData(req.body.school_remark,result.data[0].school_remark);
                    var school_del = checkUpdateData(req.body.school_del,result.data[0].school_del);
                    var sql  =  "update "+tableName+" set school_logo = '"+school_logo
                    +"' , school_name = '"+school_name
                    +"' , school_create_time = '"+school_create_time
                    +"' , school_address = '"+school_address
                    +"', school_manager = '"+school_manager
                    +"' , school_abstract = '"+school_abstract
                    +"' , school_detail = '"+school_detail
                    +"' , school_remark = '"+school_remark
                    +"' , school_del = '"+school_del+"' where school_id = "+school_id;
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
router.post('/deleteSchool', function (req, res) {
    var school_id = req.body.school_id;
    if (school_id==null) {
        return res.jsonp("school_id is null! please check!");
    }else{
        var sql = "update "+tableName+" set school_del = 'delete' where school_id = "+school_id;
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