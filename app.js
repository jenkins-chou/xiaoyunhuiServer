
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');

//路由列表
var user = require("./controller/user")
var classController = require("./controller/class")
var matchController = require("./controller/match")
var matchTypeController = require("./controller/matchType")
var refereeController = require("./controller/referee")
var schoolController = require("./controller/school")
var scoreController = require("./controller/score")
var teamController = require("./controller/team")
var userMatchController = require("./controller/user_match")
var userTeamController = require("./controller/user_team")
var uploadController = require("./controller/upload")

//var urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(express.static('public'));

// app.use(urlencodedParser)//这里使用 urlencodedParser方式
app.use(bodyParser.urlencoded({extended: true}));

// app.use(bodyParser.json({limit: '1mb'}));  //这里指定参数使用 json 格式
app.get('/', function(req,res){
    res.send('hello this is xiaoyunhui app server api');
})

app.post('/post',function(req,res){
    console.log("params:"+req.body.params);
    res.send('hello this is post request!');
})

app.use('/user',user)
app.use('/class',classController)
app.use('/match',matchController)
app.use('/matchtype',matchTypeController)
app.use('/referee',refereeController)
app.use('/school',schoolController)
app.use('/score',scoreController)
app.use('/team',teamController)
app.use('/userMatch',userMatchController)
app.use('/userTeam',userTeamController)
app.use('/upload',uploadController)

app.use(express.static(path.join(__dirname, '')))

app.listen(8888)
console.log("数据服务器已打开, 端口: 8888");



//文件服务器部分
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path')

var fileServer = http.createServer(function(req, res){
	
	//1.__dirname是全局变量,可以直接获取。表示当前执行脚本所在的目录。（这里是E:\subject）
	var staticPath = path.join(__dirname,'');    //path.join方法，拼接目录地址
	//2.staticPath拼接后的目录地址，为了跳到自己项目所在那个目录。（这里是E:\subject\act）
 	console.log(staticPath);
	//3.req.url请求的链接（这里输出的是/index.html）
	var pathObj = url.parse(req.url, true);	        //url.parse方法，解析请求的url，解决链接"\"和"/"的差异问题。
	//4.解析后的req.url是个对象。
	console.log(pathObj);
	//5.从解析后的对象中获取到pathname(这里pathObj.pathname是/index.html)
	var filePath = path.join(staticPath, pathObj.pathname);   //path.join方法，拼接完整项目目录地址。
	//6.fileContent拼接后的项目目录名字（这里是E:\subject\act\index.html）
		
		var fileContent = fs.readFileSync(filePath,'binary');	  //读取拼接完整后的目录中的文件， 'binary'表示二进制方式读取	
		res.write(fileContent,'binary');
		res.end();	
	// fs.exists(filePath,function(exists){
	//   if(exists){
	//   	//fs.readFileSync方法，同步读取文件信息														  
	// 	var fileContent = fs.readFileSync(filePath,'binary');	  //读取拼接完整后的目录中的文件， 'binary'表示二进制方式读取	
	// 	res.write(fileContent,'binary');
	// 	res.end();
	//      console.log("文件存在")
	//   }else{
	//   	res.write("",'binary');
	// 	res.end();	
	//   	console.log("文件不存在")
	//   }
	// });
	
});
fileServer.listen(9999);
console.log('文件服务器已打开, 端口: 9999');