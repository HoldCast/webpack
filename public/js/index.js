import $ from 'jquery';
require('../css/style.css');
require('../css/style.scss');
var module = require('./module.js');
$('#app').text(module);
var oImg = new Image();
oImg.src = require('../img/1.gif');//当成模块引入图片
$('body').append(oImg);
