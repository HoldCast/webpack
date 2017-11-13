/* config-1.js 使用*/
/*
var m1 = require('./js/module');
require('./css/style.css');
require('./css/style.scss');
console.log(m1.a);
*/

import $ from 'jquery';
require('./css/style.css');
require('./css/style.scss');
var module = require('./js/module.js');
$('#app').text(module.a);
var oImg = new Image();
oImg.src = require('./img/1.gif');//当成模块引入图片
$('body').append(oImg);
