$(document).ready(function () {
	console.log('document ready');

	initialize();
});

function initialize() {
	var button = "#homeExpanded";

	$(button + '0').click(function (e) {
		console.log('first button clicked');

		window.location.href = '/homeExpanded?buttonID=0';
	});
}