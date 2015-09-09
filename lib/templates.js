'use strict';

// MODULES //

var fs = require( 'fs' ),
	path = require( 'path' );


// TEMPLATES //

/**
* FUNCTION: templates()
*	Creates a list of circle.yml templates.
*
* @returns {String[]} array of template names
*/
function templates() {
	var fnames,
		fpath,
		stats,
		out,
		len,
		i;

	fnames = fs.readdirSync( __dirname );
	len = fnames.length;

	out = [];
	for ( i = 0; i < len; i++ ) {
		fpath = path.join( __dirname, fnames[ i ] );
		stats = fs.statSync( fpath );
		if ( stats.isDirectory() ) {
			out.push( fnames[ i ] );
		}
	}
	return out;
} // end FUNCTION templates()


// EXPORTS //

module.exports = templates();
