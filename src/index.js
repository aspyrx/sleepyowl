'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App');
var Owl = require('./dashboard/Owl');

ReactDOM.render(
    <Owl name="hi" message="hi" state="asleep" />
, document.getElementById('root'));
