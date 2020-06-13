// version 4 de js

function validar(formulario) {

    if (formulario.nombre.value.length < 3) {
        alert("Escriba por lo menos 3 caracteres en el campo de nombre");
        //focus nos auida a focalizar donde eta el error del llenado
        //realiza un posicioamiento al elemento del formulario
        formulario.nombre.focus();
        return false;
    }
}