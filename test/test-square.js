var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Square = require('../js/components/square');
describe('Square component', function() {
    var square, onWin, classNames, onClick, squareID, renderer, result, squareResult;
    beforeEach(function() {
        square = [""];
        onWin = [""];
        classNames = "rborder bborder";
        onClick = "handleClick callback goes here";
        squareID = [1];

        renderer = TestUtils.createRenderer();
        renderer.render(<Square text= {square} onWin= {onWin} squareID= {squareID} classNames= {classNames} onclick= {onClick} />);
        result = renderer.getRenderOutput();
        squareResult = result;
        console.log(squareResult);
    });


    it('Renders the square of type div',  function() {
        console.log("square type: ", squareResult.type);
        squareResult.type.should.equal('div');
    });

    it('Renders the square with classNames "rborder bborder"',  function() {
        squareResult.props.className.should.equal("rborder bborder ");
    });
});