/*
 * 自动加载js,css文件
 */
var aload = {
    config: function (conf) {
        for (var i in conf) {
            if(!(this[i] || this['_'+i])){
                console.error(i+'配置无效!');
                continue;
            }
            this.store[i]  = {};
            this['_'+i] = conf[i];
        }
    },
    store:{},//调用存储仓库
    _host : '/',
    js: function (name) {
        if(typeof(this.store.js[name]) != "undefined")
            return;
        this.store.js[name] = 1;
        console.info('加载'+this._host+this._js[name]+'.js文件');
        document.write("<script src='"+this._host+this._js[name]+".js'><\/script>");
    },
    css: function (name) {
        if(typeof(this.store.css[name]) != "undefined")
            return;
        this.store.css[name] = 1;
        console.info('加载'+this._host+this._css[name]+'.css文件');
        var filename = this._host+this._css[name]+'.css';
        var fileref = document.createElement('link');
            fileref.setAttribute("rel","stylesheet");
            fileref.setAttribute("type","text/css");
            fileref.setAttribute("href",filename);
        document.getElementsByTagName("head")[0].appendChild(fileref);
   }
};
//自动加载配置文件
var scripts = document.getElementsByTagName('script'),
    currentScript = scripts[scripts.length - 1];
document.write("<script src='"+currentScript.attributes['1']['nodeValue']+"'><\/script>");