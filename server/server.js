/**
 * Created by Administrator on 2017/2/21.
 */
//获取目标environment，若无则默认赋值global变量为dev
global.env = process.env.TARGET_ENV;
if (env == undefined || env == '' || env == null) {
    global.env = 'dev';
}
var fs = require('fs');
var http = require('http');
var https = require('https');
var util = require('util');
var request = require('request');
var multer = require('multer');
var express = require('express');
var bodyParser = require('body-parser');
var device = require('express-device');
var ServerSer = require('./serverSer');
var serverSerData = require('./serverSerData');

/*对象数据实例化*/
var app = express();
var serverSer = new ServerSer();
var PORT = serverSerData.port;

//设置http请求接收数据配置和最大限额等
app.use(device.capture());
app.use(bodyParser.json({limit: serverSerData.httpDataLimit}));
app.use(bodyParser.urlencoded({limit: serverSerData.httpDataLimit, extended: true}));

/**
 * 设置跨域通信
 * @see serHelper.setCrossOrigin
 */
// app.use(function (req, res, next) {
//     serHelper.setCrossOrigin(req, res, next);
// });


app.get('/getWxUserInfo', function (req, res) {
    var appid = 'wx16c7efa55a7f976b';
    var secret = '6e4698fa5da26b2639e9a578557ddc55';
    var arg = url.parse(req.url, true).query;
    var code = arg['code'];
    var getAccessTokenUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=%s&secret=%s&code=%s&grant_type=authorization_code";

    var uri = util.format(getAccessTokenUrl, appid, secret,code);
    //用request方式请求
    request.get(uri, function (err, resData, body) {
        if (!err && resData['statusCode'] == 200) {
            var userinfo= JSON.parse(body);
            console.log(userinfo);
            res.send(userinfo);

        } else {
            //调用出错
            console.error("getAccessToken error: ", err);
            if (res != null) {
                res.send('error');
            }
        }
    });
});


/**
 * 返回基础配置文件
 */
app.get('/targetSetting', function (req, res) {
    res.send(serverSerData.targetSetting)
});


//资源文件获取
app.use("/", express.static(serverSerData.projectPath + "/public"));


//----------------------------- 开启http和https服务 ----------------------------------------
var privateKey = fs.readFileSync(serverSerData.targetSetting.serverConfig.key);
var certificate = fs.readFileSync(serverSerData.targetSetting.serverConfig.cert);
var credentials = {key: privateKey, cert: certificate};

//如果部署到生产环境则用https协议打开端口，否则直接使用http协议端口
if(global.env=='prod'){
    https.createServer(credentials, app).listen(443); //开启http设置默认端口
    http.createServer(app).listen(PORT); //开启http设置配置
}else {
    app.listen(PORT);
}

console.log("Server is running at port: " + PORT + " , and at environment: " + global.env);

