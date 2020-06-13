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

        //debo saber el estado del allvalid
        if (!allValid) {
            alert("Escriba solo letras en el campo de nombre");
            formulario.nombre.focus();
            return (false);
        }
    }
}