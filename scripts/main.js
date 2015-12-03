'use strict';

var form = $('#form');
var button = $('#button');

button.on('click', function() {
	 button = prompt('What is your age?');

	 if(button <= '15') {
	 	console.log('You are not old enough to legally drive.');
	 } else {
	 	console.log('You are old enough to legally drive.');
	 }
});