var React = require('react');
var ReactDOM = require('react-dom');

var Square = function(props) {
    return (
        <div id={props.squareID} className={props.classNames + " " + props.onWin} onClick={props.onclick}>{props.text}</div>
    );
};

module.exports = Square;