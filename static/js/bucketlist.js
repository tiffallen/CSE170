'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#search").click(function(e) {
		$('.name value').text("Searching");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("main").click(projectClick);
}

function	projectClick(e)	{
	console.log("Project clicked");
	//	Cancel	the	default	action,	which	prevents	the	page	from	reloading
	e.preventDefault();
	//	In	an	event	listener,	$(this)	is	the	element	that	fired	the	event
	var	projectTitle	=	$(this).find("p").text();
	var	jumbotronHeader	=	$(".jumbotron h1");
	jumbotronHeader.text(projectTitle);	
}