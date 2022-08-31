/////////////////////////////////////////////////////////////////////////
/////////////////////////////// FUNCIONES ///////////////////////////////
/////////////////////////////////////////////////////////////////////////

// Función de validación de emails
const validarEmail = email => 
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


// Necesitamos que las contraseñas tengan entre 6 y 60 caracteres
const validarPassRegistro = inp => inp.length > 5 && inp.length < 61;

// Mostramos mensaje oninput
const handlePass = e =>  {

    const {target: {value}} = e;
            

    ///////////////////////////////////////
    ////EXPRESIÓN CON OPERADOR TERNARIO////
    ///////////////////////////////////////
    (value.length < 6 || value.length > 60) ? 
    membresiaInputMsgPass.innerText = 
    'La contraseña debe tener entre 6 y 60 caracteres.' :
    membresiaInputMsgPass.innerText = '';
}


const handleFocus = e => {

    /////////////////////////
    ////DESESTRUCTURACIÓN////
    /////////////////////////
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
    
    /////////////////////////
    ////DESESTRUCTURACIÓN////
    /////////////////////////

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
    }, 3000)

}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////// FUNCIONES PARA LOGIN ////////////////////
/////////////////////////////////////////////////////////////////////////

const validarUsuario = (correo) => {
    
    let acc = false
    
    for(el of usuariosDesdeStorage) {

        if(correo == el.email) {
            acc = true;
            return true;

        }

    }
    
    ///////////////////
    ////OPERADOR OR////
    ///////////////////

    return acc || false;   
}


const validarPass = (correo, pass) => {

    for(el of usuariosDesdeStorage) {
    
        let emailMatch = correo == el.email;

        ////////////////////
        ////OPERADOR AND////
        ////////////////////
        let passMatch = (pass == el.pass) && true;

        if(emailMatch && passMatch) {

            return true;

        } else if(emailMatch && passMatch == false) {

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
        // alert('Login exitoso')
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'En breve te estaremos redirigiendo al Home',
        })
        

    } else if(userValido && passValida == false) {

        // membresiaInputMsg.innerText = 'Contraseña incorrecta.';
        // alert('Contraseña incorrecta.')
        Swal.fire({
            icon: 'error',
            title: 'Lo sentimos',
            text: 'La contraseña ingresada es incorrecta',
            footer: '<a href="">¿Necesitas ayuda para registrarte?</a>'
        })

    } else if(userValido == false) {
        // alert('No existe usuario')
        Swal.fire({
            icon: 'error',
            title: 'Lo sentimos',
            text: 'No existe ningún usuario con esta cuenta',
            footer: '<a href="">¿Necesitas ayuda para registrarte?</a>'
        })

    }
    

}
