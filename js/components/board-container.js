var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./board')

var BoardContainer = React.createClass({
    getInitialState: function() {
    	return {
    		count: 0
    	};
    },
    createBoard: function() {
    	this.setState({
    		count: this.state.count + 1
    	});
    },

    render: function() {
    	var boards = [];
    	for (let i = 0; i <= this.state.count; i++) {
    		boards.push(<Board title={"Tic-Tac-Toe " + i} />);
    	}
	    return (
	    	<div>
	    		<button onClick={this.createBoard}>Create Tic-Tac-Toe Board</button>
	        	{boards}
	        </div>
	    );
	}
});

module.exports = BoardContainer;