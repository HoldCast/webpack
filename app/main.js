require('./css/style.scss');

import React from "react";
import ReactDOM from "react-dom";
import Hello from "./js/react.jsx";
import $ from 'jquery';

//module
let module = require('./js/module.js');
$('#module').text(module.a);

//react
ReactDOM.render(
    <Hello />,
    document.querySelector('#react')
);

//jQuery
let oImg = new Image();
oImg.src = require('./img/1.gif');//当成模块引入图片
$('#img').append(oImg);



