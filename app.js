
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
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

app.listen(8888)
console.log("listene port : 8888");