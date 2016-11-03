var React = require('react');
var ReactDOM = require('react-dom');
var Square = require('./square');

var Board = React.createClass({
    getInitialState: function() {
        return {
            playerXO: "X",
            square: ["","","","","","","","",""],
            onWin: ["","","","","","","","",""],
            count: 0,
            winCond: [[0,1,2], [0,4,8], [0,3,6], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8]]
        };
    },
    handleClick: function(event) {
        if (this.state.square[event.target.id] !== "") {
            console.log("in if");
        } else if (this.state.count % 2 === 0) {
            var squareArray = this.state.square;
            squareArray[event.target.id] = "X";
            this.setState({
                playerXO: "O",
                square: squareArray,
                count: this.state.count+1
            });
        } else {
            var squareArray = this.state.square;
            squareArray[event.target.id] = "O";
            this.setState({
                playerXO: "X",
                square: squareArray,
                count: this.state.count+1
            });
        }
        this.gameOver();
    },
    checkWin: function(indexes) {
        return (this.state.square[indexes[0]] === this.state.square[indexes[1]]) &&
                (this.state.square[indexes[0]] === this.state.square[indexes[2]]) &&
                (this.state.square[indexes[0]] !== "");
    },
    gameOver: function() {
        for (let i=0; i < this.state.winCond.length; i++) {
            if (this.state.count === 8) {
                ReactDOM.render(<div>Draw!</div>, document.getElementById('result'));
            }
            if(this.checkWin(this.state.winCond[i])) {
                var tempArray = this.state.onWin;
                tempArray[this.state.winCond[i][0]] = "highlight";
                tempArray[this.state.winCond[i][1]] = "highlight";
                tempArray[this.state.winCond[i][2]] = "highlight";
                this.setState({
                    onWin: tempArray
                });
                ReactDOM.render(<div>Game Over! Player: {this.state.playerXO} wins!</div>, document.getElementById('result'));
            }
        }
    },
    resetGame: function() {
        this.setState({
            playerXO: "X",
            square: ["","","","","","","","",""],
            onWin: ["","","","","","","","",""],
            count: 0
        });
        ReactDOM.render(<div></div>, document.getElementById('result'));
        console.log(this.state);
    },
    render: function() {
        var squares = [];
        for (var i=0; i<9; i++) {
            if (i === 0 || i === 1 || i === 3 || i === 4) {
                squares.push(<Square text={this.state.square[i]} onWin={this.state.onWin[i]} squareID={i} classNames="rborder bborder" onclick={this.handleClick}/>);
            } else if (i === 2 || i === 5) {
                squares.push(<Square text={this.state.square[i]} onWin={this.state.onWin[i]} squareID={i} classNames="bborder" onclick={this.handleClick}/>);
            } else if (i === 6 || i === 7) {
                squares.push(<Square text={this.state.square[i]} onWin={this.state.onWin[i]} squareID={i} classNames="rborder" onclick={this.handleClick}/>);
            } else {
                squares.push(<Square text={this.state.square[i]} onWin={this.state.onWin[i]} squareID={i} onclick={this.handleClick}/>);
            }
        }
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3 id="result"></h3>
                <div className="board">{squares}</div>
                <button onClick={this.resetGame}>PLAY AGAIN</button>
            </div>
        );
    }   
});

module.exports = Board;