var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var BoardContainer = require('../js/components/board-container.js');

describe('Board-container component', function() {
    var renderer, result, boardC;
    beforeEach(function() {

        renderer = TestUtils.createRenderer();
        renderer.render(<BoardContainer />);
        result = renderer.getRenderOutput();
        boardC = result;
    });


    it('Renders the container of type div with 4 children',  function() {
        boardC.type.should.equal('div');
        boardC.props.children.length.should.equal(4);
    });

    it('Renders the first two children of container with id = X and O',  function() {
        boardC.props.children[0].props.id.should.equal("X");
        boardC.props.children[1].props.id.should.equal("O");
        boardC.props.children[0].type.should.equal('h1');
        boardC.props.children[1].type.should.equal('h1');
    });

    it('Renders the Create Tic-Tac_Toe Board button with onClick linking to the createBoard function',  function() {
        boardC.props.children[2].props.children.should.be.equal('Create Tic-Tac-Toe Board');
        boardC.props.children[2].props.onClick.should.be.a('function');
        boardC.props.children[2].type.should.equal('button');
    });
    it('Renders no boards intially',  function() {
        boardC.props.children[3].length.should.equal(0);
    });
});