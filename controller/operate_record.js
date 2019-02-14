
var express = require('express');
var router = express.Router();
var url = require('url');
var connectDB = require('../tool/connectDB');
connectDB = new connectDB();

var tableName = "android_operate_error";//表名
var tableKey = "id";//主键
var tableDelete = "user_team_del";//删除标志位

//添加
router.post('/addError', function (req, res) {
    var sql = "insert into "+tableName+"(create_time,device,version_code,version_name,package_name,brand,model,sdk,device_release,operate_error) value (?,?,?,?,?,?,?,?,?,?)";
    var sqlparams = [
        req.body.create_time,
        req.body.device,
        req.body.version_code,
        req.body.version_name,
        req.body.package_name,
        req.body.brand,
        req.body.model,
        req.body.sdk,
        req.body.device_release,
        req.body.operate_error
    ]
    connectDB.add(sql,sqlparams,function(result){
        console.log(result);
    })
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