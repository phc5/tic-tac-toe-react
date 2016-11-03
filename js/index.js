require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var BoardContainer = require('./components/board-container');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<BoardContainer />, document.getElementById('app'));
});