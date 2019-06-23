window.services = {
	REPORTING: REPORTING,
	PAYMENT: PAYMENT,
	A_B_TESTING: A_B_TESTING,
	CLICK_TRACING: CLICK_TRACING,
	EXPERIMENTAL_FEATURE_1: EXPERIMENTAL_FEATURE_1,
	EXPERIMENTAL_FEATURE_2: EXPERIMENTAL_FEATURE_2
};

var reporting;
var payment;
var abTesting;
var clickTracking;
var experimentalFeature1;
var experimentalFeature2;

if (REPORTING) {
	reporting = require('./reporting.js');
}
if (PAYMENT) {
	payment = require('./payment.js');
}
if (A_B_TESTING) {
	abTesting = require('./abTesting.js');
}
if (CLICK_TRACING) {
	clickTracking = require('./clickTracking.js');
}
if (EXPERIMENTAL_FEATURE_1) {
	experimentalFeature1 = require('./experimental-1.js');
}
if (EXPERIMENTAL_FEATURE_2) {
	experimentalFeature2 = require('./experimental-2.js');
}

console.log('Bundle Loaded');
