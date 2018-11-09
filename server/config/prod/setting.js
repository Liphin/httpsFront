/**
 * Created by Administrator on 2018/11/3.
 */
//全局数据配置
var settingData = {
    basePath: "/root/https/front", //基础路径
    domainName: "https://liphin.com", //域名设置
    isProd: false, //是否为生产环境
    frontPort: 80 //前端port
};
//其他配置
settingData['projectPath'] = settingData['basePath'] + "/httpsFront";

//https服务开启
var serverConfig = {
    key: '/root/ca/https/node/cert-1541484604580_liphin.com.key',
    cert:'/root/ca/https/node/cert-1541484604580_liphin.com.crt',
};

module.exports = {
    settingData: settingData,
    serverConfig:serverConfig
};
