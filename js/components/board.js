var React = require('react');
var ReactDOM = require('react-dom');
var Square = require('./square');

var Board = React.createClass({
    getInitialState: function() {
        return {
            playerXO: true,
            square: ["","","","","","","","",""],
            count: 0
        };
    },
    handleClick: function(event) {
        console.log(this.state.playerXO + "ddd"+ event.target.id);
        if (this.state.playerXO) {
            console.log("in else if");
            this.setState({
                playerXO: !this.state.playerXO,
                square: this.state.square[event.target.id] = "O",
                count: this.state.count++
            });
            console.log(this.state.square);
        } else {
            console.log("in else");
            this.setState({
                playerXO: !this.state.playerXO,
                square: this.state.square[event.target.id] = "X",
                count: this.state.count++
            });
            console.log(this.state.square);
        }
    },
    render: function() {
        var squares = [];
        for (var i=0; i<9; i++) {
            if (i === 0 || i === 1 || i === 3 || i === 4) {
                squares.push(<Square squareID={i} classNames="rborder bborder" onclick={this.handleClick}/>);
            } else if (i === 2 || i === 5) {
                squares.push(<Square squareID={i} classNames="bborder" onclick={this.handleClick}/>);
            } else if (i === 6 || i === 7) {
                squares.push(<Square squareID={i} classNames="rborder" onclick={this.handleClick}/>);
            } else {
                squares.push(<Square squareID={i} onclick={this.handleClick}/>);
            }
        }
        return (
            <div className="board">
                {squares}
            </div>
        );
    }   
});

module.exports = Board;