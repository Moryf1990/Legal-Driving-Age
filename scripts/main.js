'use strict';

var button = $('#button');

button.on('click', function() {
	 button = prompt('What is your age?', 'Enter your age here.');

	 if(button <= parseFloat(15)) {
	 	console.log('You are not old enough to legally drive.');
	 } else {
	 	console.log('You are old enough to legally drive.');
	 }
});