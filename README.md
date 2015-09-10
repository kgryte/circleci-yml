circle.yml
=========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates a `circle.yml` file.


## Installation

``` bash
$ npm install @kgryte/circleci-yml
```


## Usage

``` javascript
var cp = require( '@kgryte/circleci-yml' );
```

#### cp( dest[, opts ][, clbk ] )

Asynchronously create a `circle.yml` file in a specified `destination` directory.

``` javascript
cp( 'path/to/a/directory', onCreate );

function onCreate( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Success!' );
}
```

The function accepts the following `options`:
*	__template__: `circle.yml` template name. Default: `'nodejs'`.
*	__versions__: language versions to build against. Defaults are template specific.

By default, a `nodejs` template is used. To specify a different `circle.yml` template, set the `template` option.

``` javascript
cp( 'path/to/a/directory', {
	'template': 'nodejs'
});
```

To specify particular language versions against which to build, set the `versions` option.

``` javascript
cp( 'path/to/a/directory', {
	'versions': [
		'4',
		'0.12',
		'0.10',
		'0.8',
		'iojs'
	]
});
```



#### cp.sync( dest[, opts] )

Synchronously create a `circle.yml` file in a specified `destination` directory.

``` javascript
cp.sync( 'path/to/a/directory' );
```

The function accepts the same `options` as the asynchronous version.


## Notes

* 	Supported templates may be found in the `./lib` directory and are named according to the directory name.
*	Default `options` for each template are located in the corresponding `./lib` directory.


## Examples

``` javascript
var mkdirp = require( 'mkdirp' ),
	path = require( 'path' ),
	cp = require( '@kgryte/circleci-yml' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

---
## CLI


### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g @kgryte/circleci-yml
```


### Usage

``` bash
Usage: circleciyml [options] [destination]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -tmpl  --template [name]     Template name. Default: 'nodejs'.
         --versions            Language versions; e.g., 4,0.12,...,iojs.
```


### Examples

``` bash
$ cd ~/my/project/directory
$ circleciyml
# => creates a circle.yml file in the current working directory
```

To specify a destination other than the current working directory, provide a `destination`.

``` bash
$ circleciyml ./../some/other/directory
```

To specify particular language versions against which to build, set the `versions` option using a comma separated list.

``` bash
$ circleciyml --versions=4,0.12,iojs
```



---
## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/@kgryte/circleci-yml.svg
[npm-url]: https://npmjs.org/package/@kgryte/circleci-yml

[travis-image]: http://img.shields.io/travis/kgryte/circleci-yml/master.svg
[travis-url]: https://travis-ci.org/kgryte/circleci-yml

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/circleci-yml/master.svg
[codecov-url]: https://codecov.io/github/kgryte/circleci-yml?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/circleci-yml.svg
[dependencies-url]: https://david-dm.org/kgryte/circleci-yml

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/circleci-yml.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/circleci-yml

[github-issues-image]: http://img.shields.io/github/issues/kgryte/circleci-yml.svg
[github-issues-url]: https://github.com/kgryte/circleci-yml/issues
