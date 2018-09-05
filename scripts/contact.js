function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkForm(form){
	if(form.firstname.value == ""){
		alert("Error: First name cannot be an empty field");
		form.firstname.focus();
		return false;
	}
	if(form.email.value == ""){
		alert("Error: Email cannot be empty");
		form.email.focus();
		return false;
	}
	if(!(validateEmail(form.email.value))) {
		alert("Error: Email is invalid");
		form.email.focus();
		return false;
	}

	if(form.firstname.value == ""){
		alert("Error: message cannot be an empty field");
		form.message.focus();
		return false;
	}

	return true;
}