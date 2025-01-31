/**
 * Created by Administrator on 2016/10/12.
 */
head.load(
    //'vendor/jquery/jquery-1.11.0.js',
    'http://cdn.static.runoob.com/libs/jquery/1.11.0/jquery.min.js',

    //'vendor/angular/angular.js',
    'https://cdn.bootcss.com/angular.js/1.5.8/angular.js',

    //'vendor/angular/messages/angular-messages.min.js',
    'https://cdn.bootcss.com/angular.js/1.5.8/angular-messages.min.js',

    //'vendor/angular/route/angular-route.min.js',
    'https://cdn.bootcss.com/angular.js/1.5.8/angular-route.min.js',

    //'vendor/angular/animate/angular-animate.min.js',
    'https://cdn.bootcss.com/angular.js/1.5.8/angular-animate.min.js',

    //'vendor/angular/cookie/angular-cookies.min.js',
    'https://cdn.bootcss.com/angular.js/1.5.8/angular-cookies.min.js',

    //'vendor/bootstrap/js/bootstrap.js',
    'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js',

    //'vendor/others/md5.min.js',//md5加密
    'https://cdn.bootcss.com/blueimp-md5/2.5.0/js/md5.min.js',//md5加密

    //js.cookie.min.js
    '/assets/js/others/js.cookie.min.js',


    /*overall part Angular框架全局设置*/
    'src/overall/module/overallModule.js',
    'src/overall/controller/overallController.js',
    'src/overall/service/overallDataService.js',
    'src/overall/service/overallSettingService.js',
    'src/overall/service/overallConfigService.js',
    'src/overall/service/overallGeneralService.js',
    'src/overall/service/overallService.js',
    'src/overall/directive/overallDirective.js',
    'src/overall/directive/overallUrlDirective.js',


    /*login 登录模块*/
    'src/login/module/loginModule.js',
    'src/login/controller/loginController.js',
    'src/login/service/loginDataService.js',
    'src/login/service/loginGeneralService.js',
    'src/login/service/loginService.js',
    'src/login/directive/loginDirective.js',
    'src/login/directive/loginUrlDirective.js',


    /*report 内容模块*/
    'src/report/list/module.js',
    'src/report/list/service.js',
    'src/report/list/data.js',
    'src/report/list/directive.js',
    'src/report/list/controller.js'

);
