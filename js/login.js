const usuariosDesdeStorage = JSON.parse(localStorage.getItem('usuarios'));


const validarUsuario = (correo) => {
    
    let acc = false
    
    for(el of usuariosDesdeStorage) {

        if(correo == el.email) {
            acc = true;
            return true;

        }
        
        if(acc == false) {
            return false;
        }   
    }
}


const validarPass = (correo, pass) => {

    for(el of usuariosDesdeStorage) {

        if(correo == el.email && pass == el.pass) {

            return true;

        } else if(correo == el.email && pass != el.pass) {

            return false;
        }
    }
}


// Handle para el login: prevenimos comportamiento por default
const handleLogin = (e) => {

    e.preventDefault();

    const userValido = validarUsuario(loginEmail.value);
    const passValida = validarPass(loginEmail.value, loginPassword.value);

    /* Si emailValido = true, mostramos un mensaje, reseteamos el input
    y removemos la clase .on__focus. Pusheamos al array de emails y lo almacenamos
    en local. En caso contrario, mostramos una advertencia */
    if(userValido && passValida) {

        // membresiaInputMsg.innerText = '¡Gracias por suscribirte!';
        // membresiaInput.value = '';
        // membresiaInputContainer.classList.remove(ON_FOCUS);
        // window.location.href = "#"
        alert('Login exitoso')

    } else if(userValido && passValida == false) {

        // membresiaInputMsg.innerText = 'Contraseña incorrecta.';
        alert('Contraseña incorrecta.')

    } else if(userValido == false) {
        alert('No existe usuario')
    }
    

}


loginEmail.addEventListener(FOCUS_IN, handleFocus);
loginEmail.addEventListener('focusout', handleFocus);  

loginPassword.addEventListener(FOCUS_IN, handleFocus);
loginPassword.addEventListener('focusout', handleFocus);

loginForm.addEventListener('submit', handleLogin);
