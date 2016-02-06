'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var HelloAlert = require('./HelloAlert');

ReactDOM.render(
        <HelloAlert message="World" />
, document.getElementById('root'));
