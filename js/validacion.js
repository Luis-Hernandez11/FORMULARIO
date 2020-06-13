// version 4 de js

function validar(formulario) {

    if (formulario.nombre.value.length < 3) {
        alert("Escriba por lo menos 3 caracteres en el campo de nombre");
        //focus nos auida a focalizar donde eta el error del llenado
        //realiza un posicioamiento al elemento del formulario
        formulario.nombre.focus();
        return false;
    }

    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm"
    var checkString = formulario.nombre.value:

        alert(checkString);

    var allValid = true;

    for (var i = 0; i < checkString.length; i++) {
        //chekAt nos ayuda a separar una cadena de caracteres
        //por ejemplo ana como cadena en char sera A N A
        var ch = checkString.charAt(i);
        for (int j = 0; j < checkOk.length; j++)
            if (ch == checkOk.charAt(i))
                break;
        if (j == checkOk.length) {
            allValid = false;
            break;
        }

    }

    //debo saber el estado del allvalid
    if (!allValid) {
        alert("Escriba solo letras en el campo de nombre");
        formulario.nombre.focus();
        return (false);
    }

    //formulario edad
    if (formulario.edad.value.length < 2) {
        alert("Escriba maximo dos digitos, o la maxima edad de 99");
        //focus nos auida a focalizar donde eta el error del llenado
        //realiza un posicioamiento al elemento del formulario
        formulario.edad.focus();
        return false;
    }

    var checkOk = "123456789";
    var checkString = formulario.edad.value:

        alert(checkString);

    var allValid = true;
    //debo saber si edad es all
    if (!allValid) {
        alert("Escriba solo numeros en el campo numerico");
        formulario.edad.focus();
        return (false);
    }

    //correo

    if (formulario.correo.value.length < 5) {
        alert("Escriba el correo con el formato xxx.xxx.x");
        //focus nos auida a focalizar donde eta el error del llenado
        //realiza un posicioamiento al elemento del formulario
        formulario.correo.focus();
        return false;
    }

    var txt = formulario.correo.value;
    //expresion regular
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/
        //ejemplo@ejemplo
        //ejemplo@ejemplo.ejemplo
        //todo lo que esta adentro de los corchetes es la expresion
        //existen cadenas para creacion de curp
        //para una llave compartida de sssdddpdf

    alert("Email " + (b.test(txt) ? "" : "no") + "valido")
        //si b.test(txt) "" es verdadero : sino el "no" es el falso





}