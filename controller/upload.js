/**
 * Created by iwang on 2017/1/15.
 */
//express使用的是@4版本的。
var express = require('express');
//form表单需要的中间件。
var mutipart= require('connect-multiparty');

var mutipartMiddeware = mutipart();
var app = express.Router();
//下面会修改临时文件的储存位置，如过没有会默认储存别的地方，这里不在详细描述,这个修改临时文件储存的位置 我在百度里查找了三四个小时才找到这个方法，不得不说nodejs真难学。
//所以在这里留下我的学习记录，以备以后翻阅。

app.use(mutipart({uploadDir:'./upload'}));
//设置http服务监听的端口号。
// app.set('port',3000);
// app.listen(app.get('port'),function () {
//     console.log("Express started on http://localhost:"+app.get('port')+'; press Ctrl-C to terminate.');
// });
//浏览器访问localhost会输出一个html文件
app.get('/',function (req,res) {
    res.type('text/html');
    res.sendFile('F:/node/xiaoyunhuiServer/test/test.html')
});
//这里就是接受form表单请求的接口路径，请求方式为post。
app.post('/uploadImg',mutipartMiddeware,function (req,res) {
    //这里打印可以看到接收到文件的信息。
    // console.log(req.files);
    /*//do something
    * 成功接受到浏览器传来的文件。我们可以在这里写对文件的一系列操作。例如重命名，修改文件储存路径 。等等。
    *
    *
    * */
    // var result = {
    //   "status":'200',
    //   "message":'上传成功',
    //   "data":[{
    //     "path":req.files.uploadFile.path
    //   }]
    // }
    // console.log(result);
    //给浏览器返回一个成功提示。
    res.send(req.files.uploadFile.path);
});

module.exports = app;