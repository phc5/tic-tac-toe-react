var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Square = require('../js/components/square');
describe('Square component', function() {
    var renderer, result, square;
    beforeEach(function() {
        renderer = TestUtils.createRenderer();
        renderer.render(<Square text= {[""]} onWin= {[""]} squareID= '1' classNames= "rborder bborder" onclick= "handleClick callback goes here" />);
        result = renderer.getRenderOutput();
        square = result;
    });


    it('Renders the square of type div',  function() {
        square.type.should.equal('div');
    });

    it('Renders the square with classNames "rborder bborder"',  function() {
        console.log("square ",square);
        square.props.className.should.equal("rborder bborder ");
    });

    it('Renders the square with handleClick callback and correct squareID',  function() {
        square.props.onClick.should.equal('handleClick callback goes here');
        square.props.id.should.equal('1');
    });
});