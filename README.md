# mutationobserver-polyfill
Forces use of polyfill in IE 11 since IE 11's native one causes XML data issues.
See https://github.com/talee/mutationobserver-breaks-characterdata.

## Usage

	require('mutationobserver-polyfill')

Uses latest release of MutationObserver polyfill from
https://github.com/webcomponents/webcomponentsjs.

If the environment isn't a browser, exists silently.

## Build

	npm start

Pulls latest MutationObserver polyfill from webcomponentsjs
