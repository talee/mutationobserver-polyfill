# mutationobserver-polyfill
Forces use of polyfill in IE 11 since IE 11's native one causes XML data issues.
See https://github.com/talee/mutationobserver-breaks-characterdata.

## Usage

	var polyfill = require('mutationobserver-polyfill')

	// Run it when browser exists
	polyfill()

Short version:

	require('mutationobserver-polyfill')()

Uses latest release of MutationObserver polyfill from
https://github.com/webcomponents/webcomponentsjs.

## Build

	npm start
