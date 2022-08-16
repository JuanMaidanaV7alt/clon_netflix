// Definimos variables buscando en el index
const membresiaForm = document.querySelector('.membresia__form');
const membresiaInput = document.querySelector('.membresia__input');
const membresiaInputContainer = document.querySelector('.membresia__input__container');
const membresiaInputLabel = document.querySelector('.membresia__placeholder');
const membresiaInputMsg = document.querySelector('.membresia__input__msg');


/* Variables que contienen strings (en el primer caso, de una clase que agregaremos luego,
en el segundo, del evento focusin */ 
const ON_FOCUS = 'on__focus';
const FOCUS_IN = 'focusin';


// querySelectorAll para seleccionar todos los elementos con la clase pregunta
const acordeonPreguntaEls = document.querySelectorAll('.pregunta')


// Función de validación de emails
const validarEmail = email => 
    // Expresión regular usada para validar emails
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


const handleFocus = e => {

    /* Destructuring, asignando valores del evento a las nuevas variables.
    Hay un segundo nivel de destructuring: accedemos al target del evento (el objeto
    donde se dispara el evento, en este caso, un input), y de allí sacamos el value. */ 
    const {target: {value}, type} = e;

    // Si el input tiene un valor ingresado, no necesitamos agregar la clase
    if(value) return true;

    // Agregamos la clase .on__focus, que afecta al placeholder "Email"
    if(type == FOCUS_IN) {
        membresiaInputContainer.classList.add(ON_FOCUS);
        return true;
    }
    
    /* Si el input no contiene ningún valor y no estamos en focusin,
    quitamos la clase, devolviendo el placeholder a su lugar original */ 
    membresiaInputContainer.classList.remove(ON_FOCUS);
}


// Handle para el submit: prevenimos comportamiento por default
const handleSubmit = (e) => {

    e.preventDefault();

    // Declaramos value de membresiaInput, que luego tomamos para la validación de correo
    const {value} = membresiaInput;

    const emailValido = validarEmail(value);

    /* Si emailValido = true, mostramos un mensaje, reseteamos el input
    y removemos la clase .on__focus. En caso contrario, mostramos una advertencia */
    if(emailValido) {
        membresiaInputMsg.innerText = '¡Gracias por suscribirte!';
        membresiaInput.value = '';
        membresiaInputContainer.classList.remove(ON_FOCUS);
    } else {
        membresiaInputMsg.innerText = 'El email es obligatorio.';

    }
    
    setTimeout(() => {
        membresiaInputMsg.innerText = '';

    }, 3000)

}

// Agregamos EventListeners
membresiaInput.addEventListener(FOCUS_IN, handleFocus);
membresiaInput.addEventListener('focusout', handleFocus);   
membresiaForm.addEventListener('submit', handleSubmit);


/* FAQ: forEach para los acordeones */
acordeonPreguntaEls.forEach(element => {

    /* La función handler accede al padre del elemento en el que se dispara
    el evento (click en el button) y le hace toggle a la clase .active
    (es decir que se la agrega o quita a los .acordeon__li, y así afecta
    a sus hijos: translate en el svg y display de la respuesta) */
    const handler = (e) => {
        const parent = e.target.parentElement;
        parent.classList.toggle('active');
    }

    // Llamamos a la función con el click
    element.addEventListener('click', handler);
});