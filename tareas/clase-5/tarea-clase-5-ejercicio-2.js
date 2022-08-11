//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const nuestroTitulo = document.querySelector('h1');

const parrafoDatos = document.querySelector('p');



const $datosUsuario = document.querySelector('#boton-datos');

$datosUsuario.onclick = function(){
    const nombreUsuario = document.querySelector('#primer-nombre').value;
    const apellidoUsuario = document.querySelector('#apellido-nombre').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);

    nuestroTitulo.textContent = `Bienvenido ${nombreUsuario}`;

    parrafoDatos.textContent = `Sus nombre es: ${nombreUsuario}, su apellido es: ${apellidoUsuario}, su edad es: ${edadUsuario}`;

    
    return false;
}
