var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Board = require('../js/components/board.js');

describe('Board component', function() {
    var renderer, result, board;
    beforeEach(function() {

        renderer = TestUtils.createRenderer();
        renderer.render(<Board title="Tic-Tac-Toe 1" deleteBoard="deleteBoard callback" winCount='0' key='1'/>);
        result = renderer.getRenderOutput();
        board = result;
    });


    it('Renders the board of type div',  function() {
        board.type.should.equal('div');
    });

    it('Renders the square with title "Tic-Tac-Toe " + 1',  function() {
        board.props.children[0].props.children.should.equal("Tic-Tac-Toe 1");
    });

    it('Renders the square with button calling deleteBoard callback',  function() {
        board.props.children[4].props.onClick.should.equal("deleteBoard callback");
    });

    it('Renders the square with button calling deleteBoard callback',  function() {
        board.props.children[2].props.children.length.should.equal(9);
    });
});