var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./board')

var BoardContainer = React.createClass({
    getInitialState: function() {
    	return {
    		count: 0,
    		boards:[],
    		x: 0,
    		o: 0
    	};
    },
    componentDidMount: function() {
        console.log("Mounted");
    },
    createBoard: function() {
    	this.setState({
    		boards: this.state.boards.concat(this.state.count),
    		count: this.state.count + 1
    	});
    },
    winCount: function(player) {
    	if(player === "X") {
    		this.setState({
    			x: this.state.x + 1
    		});
    	} else {
    		this.setState({
    			o: this.state.o + 1
    		});
    	}
    },
    deleteBoard: function(index) {
    	this.setState({
    		boards: this.state.boards.filter(board => board !== index)
    	});
    },
    render: function() {
	    return (
	    	<div>
	    		<h1 id="X">X: {this.state.x}</h1>
	    		<h1 id="O">O: {this.state.o}</h1>
	    		<button id="create" onClick={this.createBoard}>Create Tic-Tac-Toe Board</button>
	        	{this.state.boards.map(board => 
		    		(<Board title={"Tic-Tac-Toe " + board} deleteBoard={this.deleteBoard.bind(null, board)} winCount={this.winCount} key={board}/>)
		    	)}
	        </div>
	    );
	}
});

module.exports = BoardContainer;