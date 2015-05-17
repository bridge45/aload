var Host = 'http://192.168.42.132/';

aload.config({
    host:'http://www.safe.com/aload/',
    js: {
        'my': 'js/my'//定义路径(my会被这个配置的路径替换)
        //'jquery': 'script/common/jquery-1.11.3.min',依次可以加载很多
    },
    css:{
        'my'   :'css/my'
    }
});
aload.js('my');
aload.css('my');
