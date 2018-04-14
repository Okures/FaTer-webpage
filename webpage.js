function validateUserName(userName) {
	var re = /[^a-zA-Z0-9\-\/]/;
	return re.test(String(userName).toLowerCase());
}

function validateEmail(email) {
	// Check if the email is in a mathematically possible format 
	// xyz@something.com - VALID - return true
	// a872= - NOT VALID - return false
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sendEmailAndNameToDatabase(e) {
	e.preventDefault()
	console.log('well done, you did it');
	console.log('event received: ', e);

	var userName = e.target[0].value;
	var email = e.target[1].value;

	// Validations

	if (validateEmail(email) && validateUserName(userName)) {
		console.log('Making HTTP request')
		// fetch('http://kajhsdkjahsd.sldjfjhsdjhf.sdkjfh/email', {
		// 	method: 'post',
		// 	body: {
		// 		userName,
		// 		email
		// 	}
		// })
	} else {
		alert('User name or email address is invalid!');
	}

}

var notifyMeForm = document.getElementById('notifyMe');

notifyMeForm.addEventListener('submit', sendEmailAndNameToDatabase);




































// function addEventListener(nameOfEvent, somefunctionToDO) {
// 	// wait for this event (nameOfEvent)
// 	// variable eventObject = {
// 	// 	nameOfEvent: 'jashdkjashd',
// 	// 	value: [ akjsshdka ]
// 	// 	function preventDefault() {
// 	// 	// dont do the normal thing
// 	// }
// 	// }
// 	// after that, somefunctionToDo(eventObject)
// }