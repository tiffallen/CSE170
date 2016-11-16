$(document).ready(function () {
	console.log('document ready');

	initialize();
});

function initialize() {
	var button = "#bucketExpanded";

	$(button + '0').click(function (e) {
		console.log('first button clicked');

		window.location.href = '/bucketExpanded?buttonID=0';
	});

	$(button + '1').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/bucketExpanded?buttonID=1';
	});

	$(button + '2').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/bucketExpanded?buttonID=2';
	});
	$(button + '3').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/bucketExpanded?buttonID=3';
	});
	$(button + '4').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/bucketExpanded?buttonID=4';
	});
	$(button + '5').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/bucketExpanded?buttonID=5';
	});
}