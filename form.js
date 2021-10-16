const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');


const expression = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}


const validateform = (e) =>{
    switch (e.target.name){
        case "name":
        validatefield(expression.name, e.target, 'name');
        break;
        case "email":
        validatefield(expression.email, e.target, 'email');
        break;
        case "phone":
        validatefield(expression.phone, e.target, 'phone');
        break;
    }
}

const validatefield = (expresion, input, field) =>{
    if(expresion.test(input.value)){
        document.getElementById(`form__input-${field}`).classList.remove('contact__input-incorrecto');
        document.getElementById(`form__input-${field}`).classList.add('contact__input-correcto');
		document.querySelector(`#form__input-${field} span`).classList.remove('fa-times-circle');
		document.querySelector(`#form__input-${field} span`).classList.add('fa-check-circle');
		document.querySelector(`#form__${field} .form__input-error`).classList.remove('form__input-error-activo');
    }else{
		document.getElementById(`form__input-${field}`).classList.add('contact__input-incorrecto');
		document.querySelector(`#form__input-${field} span`).classList.remove('fa-check-circle');
		document.querySelector(`#form__input-${field} span`).classList.add('fa-times-circle');
		document.querySelector(`#form__${field} .form__input-error`).classList.add('form__input-error-activo');
	}
}


inputs.forEach((input)=>{
	input.addEventListener('keyup', validateform);
	input.addEventListener('blur', validateform);
});

formulario.addEventListener('submit', (e) =>{
	e.preventDefault();
});
