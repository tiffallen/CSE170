$(document).ready(function () {
	console.log('document ready');

	initialize();
});

function initialize() {
	var button = "#homeEvents";

	$(button + '0').click(function (e) {
		console.log('first button clicked');

		window.location.href = '/homeEvents?buttonID=0';
	});

	$(button + '1').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/homeEvents?buttonID=1';
	});

	$(button + '2').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeEvents?buttonID=2';
	});
	$(button + '3').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeEvents?buttonID=3';
	});
	$(button + '4').click(function (e) {
		console.log('fourth button clicked');

		window.location.href = '/homeEvents?buttonID=4';
	});
	$(button + '5').click(function (e) {
		console.log('fifth button clicked');

		window.location.href = '/homeEvents?buttonID=5';
	});
	$(button + '6').click(function (e) {
		console.log('sixth button clicked');

		window.location.href = '/homeEvents?buttonID=6';
	});
	$(button + '7').click(function (e) {
		console.log('seventh button clicked');

		window.location.href = '/homeEvents?buttonID=7';
	});
	$(button + '8').click(function (e) {
		console.log('eight button clicked');

		window.location.href = '/homeEvents?buttonID=8';
	});
	$(button + '9').click(function (e) {
		console.log('ninth button clicked');

		window.location.href = '/homeEvents?buttonID=9';
	});
	$(button + '10').click(function (e) {
		console.log('tenth button clicked');

		window.location.href = '/homeEvents?buttonID=10';
	});
}