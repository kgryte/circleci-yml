'use strict';

// MODULES //

var fs = require( 'fs' ),
	path = require( 'path' );


// DEFAULTS //

/**
* FUNCTION: defaults()
*	Loads default options for circle.yml templates.
*
* @returns {Object} default template options
*/
function defaults() {
	var fnames,
		fpath,
		stats,
		out,
		len,
		i;

	fnames = fs.readdirSync( __dirname );
	len = fnames.length;

	out = {};
	for ( i = 0; i < len; i++ ) {
		fpath = path.join( __dirname, fnames[ i ] );
		stats = fs.statSync( fpath );
		if ( stats.isDirectory() ) {
			out[ fnames[ i ] ] = require( fpath + '/defaults.json' );
		}
	}
	return out;
} // end FUNCTION defaults()


// EXPORTS //

module.exports = defaults();
