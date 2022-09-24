////////////////////////////////////////////////////////////
//////////////////CÓDIGO PARA LANDING PAGE//////////////////
////////////////////////////////////////////////////////////

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


/* vars que contienen strings (en el primer caso, de una clase que agregaremos luego,
en el segundo, del evento focusin */ 
const ON_FOCUS = 'on__focus';
const FOCUS_IN = 'focusin';


// querySelectorAll para seleccionar todos los elementos con la clase pregunta
const acordeonPreguntaEls = document.querySelectorAll('.pregunta, .svg-icon')


// Array para almacenar usuarios registrados
const userList = []



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
        const acordeon = e.target.closest('li.acordeon__li');
        acordeon.classList.toggle('active');
    }

    // Llamamos a la función con el click
    element.addEventListener('click', handler);
});
