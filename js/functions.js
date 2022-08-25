/////////////////////////////////////////////////////////////////////////
/////////////////////////////// FUNCIONES ///////////////////////////////
/////////////////////////////////////////////////////////////////////////

// EN ESTADO DE PRUEBA (TODAVÍA NO LINKEADO)

// Función de validación de emails
const validarEmail = email => 
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

// Necesitamos que las contraseñas tengan entre 6 y 60 caracteres
const validarPassRegistro = inp => inp.length > 5 && inp.length < 61;

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

/////////////////////////////////////////////////////////////////////////
/////////////////////////////// FUNCIONES PARA LOGIN ////////////////////
/////////////////////////////////////////////////////////////////////////
