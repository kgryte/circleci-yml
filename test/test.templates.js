/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	templates = require( './../lib/templates.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'circle.yml templates', function tests() {

	it( 'should export an array', function test() {
		expect( templates ).to.be.an( 'array' );
		assert.ok( templates.length );
	});

});
