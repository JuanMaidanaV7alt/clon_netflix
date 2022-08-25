// vars p/index
const membresiaForm = document.querySelector('#membresiaForm');
const membresiaInput = document.querySelector('#membresiaInput');
const membresiaInputContainer = document.querySelector('#membresiaInputContainer');
const membresiaInputLabel = document.querySelector('#membresiaPlaceholder');
const membresiaInputMsg = document.querySelector('#membresiaInputMsg');

const membresiaInputPass = document.querySelector('#membresiaInputPass');
const membresiaInputContainerPass = document.querySelector('#membresiaInputContainerPass');
const membresiaInputLabelPass = document.querySelector('#membresiaPlaceholderPass');
const membresiaInputMsgPass = document.querySelector('#membresiaInputMsgPass');


// vars p/login
const loginForm = document.querySelector('#loginForm')
const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');
const emailMsg = document.querySelector('.email__msg');
const passwordMsg = document.querySelector('.password__msg');

/* vars que contienen strings (en el primer caso, de una clase que agregaremos luego,
en el segundo, del evento focusin */ 
const ON_FOCUS = 'on__focus';
const FOCUS_IN = 'focusin';


// querySelectorAll para seleccionar todos los elementos con la clase pregunta
const acordeonPreguntaEls = document.querySelectorAll('.pregunta')


// Array para almacenar usuarios registrados
const userList = []


// Función de validación de emails
const validarEmail = email => 
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


// Necesitamos que las contraseñas tengan entre 6 y 60 caracteres
const validarPassRegistro = inp => inp.length > 5 && inp.length < 61;

// Mostramos mensaje oninput
const handlePass = e =>  {

    const {target: {value}} = e;
        
    if(value.length < 6 || value.length > 60) {

        membresiaInputMsgPass.innerText = 'La contraseña debe tener entre 6 y 60 caracteres.';
    } else {

        membresiaInputMsgPass.innerText = '';
    }
}


const handleFocus = e => {

    /* Destructuring, asignando valores del evento a las nuevas variables.
    Hay un segundo nivel de destructuring: accedemos al target del evento (el objeto
    donde se dispara el evento, en este caso, un input), y de allí 
    sacamos el value y el elemento padre. */ 
    const {target: {value, parentElement: parent}, type} = e;

    // Si el input tiene un valor ingresado, no necesitamos agregar la clase
    if(value) return true;

    // Agregamos la clase .on__focus, que afecta el posicionamiento de los placeholders
    if(type == FOCUS_IN) {
        parent.classList.add(ON_FOCUS);
        return true;
    }

    /* Si el input no contiene ningún valor y no estamos en focusin,
    quitamos la clase, devolviendo el placeholder a su lugar original */ 
    parent.classList.remove(ON_FOCUS);
}


const handleSubmit = (e) => {

    e.preventDefault();

    // Declaramos value de membresiaInput, que luego tomamos para la validación de correo
    const {value: emailIngresado} = membresiaInput;
    const {value: passIngresada} = membresiaInputPass
    const emailValido = validarEmail(emailIngresado);
    const passValida = validarPassRegistro(passIngresada);
    const innerUser = {
        email: emailIngresado,
        pass: passIngresada,
    };

    /* Si emailValido = true, mostramos un mensaje, reseteamos el input
    y removemos la clase .on__focus. Pusheamos al array de emails y lo almacenamos
    en local. En caso contrario, mostramos una advertencia */
    if(emailValido && passValida) {
        membresiaInputMsg.innerText = '¡Gracias por suscribirte!';
        membresiaInput.value = '';
        membresiaInputPass.value = '';
        membresiaInputContainer.classList.remove(ON_FOCUS);
        membresiaInputContainerPass.classList.remove(ON_FOCUS);
        userList.push(innerUser);
        localStorage.setItem('usuarios', JSON.stringify(userList))
    } else if(emailValido && passValida == false) {

        membresiaInputMsgPass.innerText = 'La contraseña debe tener entre 6 y 60 caracteres.';
    } else if(emailValido == false) {
        
        membresiaInputMsg.innerText = 'El email es obligatorio.';
    }
    
    setTimeout(() => {
        membresiaInputMsg.innerText = '';
        // membresiaInputMsgPass.innerText = '';

    }, 3000)

}

membresiaInput.addEventListener(FOCUS_IN, handleFocus);
membresiaInput.addEventListener('focusout', handleFocus);   
membresiaInputPass.addEventListener(FOCUS_IN, handleFocus);
membresiaInputPass.addEventListener('focusout', handleFocus);   
membresiaInputPass.addEventListener('input', handlePass);   
membresiaForm.addEventListener('submit', handleSubmit);


/* FAQ: forEach para los acordeones */
acordeonPreguntaEls.forEach(element => {

    /* La función handler accede al padre del elemento en el que se dispara
    el evento (click en el button) y le hace toggle a la clase .active
    (es decir que se la agrega o quita a los .acordeon__li, y así afecta
    a sus hijos: translate en el svg y display de la respuesta) */
    const handler = (e) => {
        const {target: {parentElement: parent}} = e;
        parent.classList.toggle('active');
    }

    // Llamamos a la función con el click
    element.addEventListener('click', handler);
});



/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// A PARTIR DE ACÁ: JS PARA EL LOGIN ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

