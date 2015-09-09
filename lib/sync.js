'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' ),
	isObject = require( 'validate.io-object' ),
	contains = require( 'validate.io-contains' ),
	isStringArray = require( 'validate.io-string-array' ),
	merge = require( 'utils-merge2' )(),
	mustache = require( 'mustache' ),
	path = require( 'path' ),
	fs = require( 'fs' ),
	templates = require( './templates.js' ),
	defaults = require( './defaults.js' );


// COPY //

/**
* FUNCTION: cp( dest[, opts ] )
*	Synchronously creates a circle.yml file.
*
* @param {String} dest - circle.yml destination directory
* @param {Object} [opts] - function options
* @param {String} [opts.template="nodejs"] - circle.yml template to use
*/
function cp( dest, options ) {
	var tmpl = 'nodejs',
		fpath,
		dpath,
		opts,
		out;

	if ( !isString( dest ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string primitive. Value: `' + dest + '`.' );
	}
	if ( arguments.length > 1 ) {
		opts = options;
		if ( !isObject( opts ) ) {
			throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + opts + '`.' );
		}
		if ( opts.hasOwnProperty( 'template' ) ) {
			tmpl = opts.template;
			if ( !isString( tmpl ) ) {
				throw new TypeError( 'invalid option. Template option must be a string primitive. Option: `' + tmpl + '`.' );
			}
			if ( !contains( templates, tmpl ) ) {
				throw new Error( 'invalid option. Unrecognized template name. Must be one of [' + templates.join( ',' ) + '] Option: `' + tmpl + '`.' );
			}
		}
		if ( opts.hasOwnProperty( 'versions' ) ) {
			if ( !isStringArray( opts.versions ) ) {
				throw new TypeError( 'invalid option. Versions option must be a string array. Option: `' + opts.versions + '`.' );
			}
		}
	} else {
		opts = {};
	}
	opts = merge( {}, defaults[ tmpl ], opts );

	fpath = path.join( __dirname, tmpl, 'circle.yml' );
	dpath = path.join( dest, 'circle.yml' );

	out = fs.readFileSync( fpath, {
		'encoding': 'utf8'
	});
	out = mustache.render( out, {
		'versions': opts.versions
	});

	fs.writeFileSync( dpath, out );
} // end FUNCTION cp()


// EXPORTS //

module.exports = cp;
