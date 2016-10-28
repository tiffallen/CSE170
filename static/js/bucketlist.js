'use strict';

var PORT = 3000;

var http = require('http');

/* var server = 
	http.createServer(
		function(request,response) {
			console.log('got a request!');
			response.write('hi');
			response.end();
	});
 */

var server = http.createServer(

function popup(mylink, windowname) { 
    if (!windowname.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href; 
    window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); 
    return false; 
 });

server.listen(3000);