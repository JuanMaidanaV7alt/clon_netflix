//////////////////////////////
////LIBRERÍA SWEET ALERT 2////
//////////////////////////////

const Toast = Swal.mixin({
    title: 'Lo sentimos',
    background: '#e87c03',
    color: '#fff',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    width: '20%',
    timer: 400000000000,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },

})

const passAlert = () => {
    Toast.fire({
        text: 'Contraseña incorrecta. Reinténtalo o restablece la contraseña.',
        // footer: '<a href="">¿Necesitas ayuda para registrarte?</a>',
    });
}

const userAlert = () => {
    Toast.fire({
        text: 'No existe ningún usuario con esta cuenta',
    });

}