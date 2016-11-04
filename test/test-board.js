var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Square = require('../js/components/square.js');
var Board = require('../js/components/board.js');

describe('Board component', function() {
    var square, onWin, classNames, onClick, squareID, renderer, result, squareResult;
    beforeEach(function() {

        renderer = TestUtils.createRenderer();
        renderer.render(<Board title={"Tic-Tac-Toe " + 1} deleteBoard={"delete callback"} winCount={0} key={1}/>);
        result = renderer.getRenderOutput();
        board = result;
        console.log(board);
    });


    it('Renders the square of type div',  function() {
        console.log("square type: ", squareResult.type);
        squareResult.type.should.equal('div');
    });

    it('Renders the square with classNames "rborder bborder"',  function() {
        squareResult.props.className.should.equal("rborder bborder ");
    });
});