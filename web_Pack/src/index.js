import css from './css/index.css';
var a = 0;
setTimeout(function(){
    var path = require("path");
    console.log(path.resolve(__dirname,'dist'));
},1000);
var str = "hello123";
var oH1 = document.getElementsByTagName("h1");
oH1.innerHTML="hello!!!";
