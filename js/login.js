// vars p/login
const loginForm = document.querySelector('#loginForm')
const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');
const emailMsg = document.querySelector('.email__msg');
const passwordMsg = document.querySelector('.password__msg');

const usuariosDesdeStorage = JSON.parse(localStorage.getItem('usuarios'));

/* se me ocurre usar el map para agregar, además, una pp de avatar
(aleatorio) para cada usuario, por ahora solo sumo id */ 
const userDataBase = usuariosDesdeStorage.map(usuario => {

    //////////////
    ////SPREAD////
    //////////////
    return {...usuario, id: usuariosDesdeStorage.indexOf(usuario)};
});

/* vars que contienen strings (en el primer caso, de una clase que agregaremos luego,
en el segundo, del evento focusin */ 
const ON_FOCUS = 'on__focus';
const FOCUS_IN = 'focusin';


loginEmail.addEventListener(FOCUS_IN, handleFocus);
loginEmail.addEventListener('focusout', handleFocus);  

loginPassword.addEventListener(FOCUS_IN, handleFocus);
loginPassword.addEventListener('focusout', handleFocus);

loginForm.addEventListener('submit', handleLogin);
