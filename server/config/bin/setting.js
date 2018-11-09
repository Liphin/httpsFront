/**
 * Created by Administrator on 2018/11/3.
 */
//全局数据配置
var settingData = {
    basePath: "G:/SoftwareOutSourcing/https/front/httpsFront", //基础路径
    domainName: "http://liphin.com", //域名设置
    isProd: false, //是否为生产环境
    frontPort: 80, //前端port
};
//其他配置
settingData['projectPath'] = settingData['basePath'] + "/project";

//https服务开启
var serverConfig = {
    key: 'G:/SoftwareOutSourcing/https/ca/Nginx/cert-1541484604580_liphin.com.key',
    cert:'G:/SoftwareOutSourcing/https/ca/Nginx/cert-1541484604580_liphin.com.crt',
};

module.exports = {
    settingData: settingData,
    serverConfig:serverConfig
};
