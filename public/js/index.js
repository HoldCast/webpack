//import $ from 'jquery';
require('../css/style.css');
require('../css/style.scss');
var module = require('./module.js');
document.getElementById('app').innerHTML = module;
//$('#app').text(module);
var oImg = new Image();
oImg.src = require('../img/1.gif');//当成模块引入图片
document.getElementsByTagName('body')[0].appendChild(oImg);
alert(5);
//$('body').append(oImg);
