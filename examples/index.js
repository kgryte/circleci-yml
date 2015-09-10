'use strict';

var mkdirp = require( 'mkdirp' ),
	path = require( 'path' ),
	cp = require( './../lib' );

var dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

mkdirp.sync( dirpath );
cp.sync( dirpath, {
	'template': 'nodejs',
	'versions': [
		'4',
		'0.12',
		'iojs'
	]
});

