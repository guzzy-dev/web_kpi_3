const name = document.querySelector("#name")
const phone = document.querySelector("#phone")
const email = document.querySelector("#email")

let nameValidation = new RegExp("\[A-Z]{1}[a-z]+")
let phoneValidation = new RegExp("\\+380[1-9][0-9]{8}")
let emailValidation = new RegExp("[a-zA-Z0-9.]+@[gmail|yandex|kpi]{3,8}[.][com|uar]{2,5}")

const someForm = document.querySelector("#someForm")

let nameIsValid, phoneIsValid, emailIsValid

let checkValidation = (form, pattern) => {
	if(!pattern.test(form.value)){
		form.style.borderColor = "red"
		return false
	}
	else{
		form.style.borderColor = "white"
		return true
	}
}

let validateForm = () => {
	nameIsValid = checkValidation(name, nameValidation)
	phoneIsValid = checkValidation(phone, phoneValidation)
	emailIsValid = checkValidation(email, emailValidation)
	return nameIsValid && phoneIsValid && emailIsValid
}


window.addEventListener("submit", () => {
	event.preventDefault()
	let validation = validateForm()
	
	if (validation){
		setTimeout("alert('gud)');", 1) 
	}
	
})



