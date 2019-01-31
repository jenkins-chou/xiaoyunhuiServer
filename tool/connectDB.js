var mysql = require('mysql');
var mysql_setting = require('../mysql_config');

function connectDB(){
    //查询函数
    this.query = function(sql,callback){
        var connection = mysql.createConnection(mysql_setting);
        connection.connect();
        console.log("connectDB: use callback function");
        connection.query(sql, function (error, data) {
            console.log("error :"+error);
            if (error) {
                var result = {
                    "status": "500",
                    "message": "服务器错误"
                }
                callback(result);
            }
            else{
                var result = {
                    "status": "200",
                    "message": "success",
                    "data":data
                }
                callback(result);
            }
            connection.end();//释放
        })
    }

    //添加函数
    this.add = function(sql,sqlparams,callback){
        var connection = mysql.createConnection(mysql_setting);
        connection.connect();
        console.log("");

        connection.query(sql,sqlparams,function(error,data){
            if (error) {
                console.log("error:"+error);
                var result = {
                    "status": "500",
                    "message": "服务器错误"
                }
                callback(result);
            }else{
                var result = {
                    "status": "200",
                    "message": "success",
                }
                callback(result);
            }
            connection.end();//释放
        })
    }
    //更新函数
    this.update = function(sql,callback){
        var connection = mysql.createConnection(mysql_setting);
        connection.connect();
        connection.query(sql,function(error,data){
            if (error) {
                var result = {
                    "status":"500",
                    "message":"服务器错误",
                    "error":error
                }
                callback(result);
            }else{
                var result = {
                    "status":"200",
                    "message":"success",
                }
                callback(result);
            }
            connection.end();
        });
    }

    //删除函数
    this.delete = function(sql,callback){
        var connection = mysql.createConnection(mysql_setting);
        connection.connect();
        connection.query(sql,function(error,data){
            if (error) {
                var result = {
                    "status":"500",
                    "message":"服务器错误",
                }
                callback(result);
            }else{
                var result = {
                    "status":"200",
                    "message":"success",
                }
                callback(result);
            }
            connection.end();
        });
    }

    this.excute = function(sql,callback){
        var connection = mysql.createConnection(mysql_setting);
        connection.connect();
        console.log("connectDB: use callback function");
        connection.query(sql, function (error, data) {
            console.log("error :"+error);
            if (error) {
                var result = {
                    "status": "500",
                    "message": "服务器错误"
                }
                callback(result);
            }
            else{
                var result = {
                    "status": "200",
                    "message": "success",
                }
                callback(result);
            }
            connection.end();//释放
        })
    }
}

module.exports = connectDB;