/*
    Archivo de Lógica Pura: Un script de JavaScript donde modelen las reglas principales de su proyecto utilizando variables, condicionales y ciclos

        1.  Configuración:
            •   Debes "quemar" (hardcodear) un usuario y una contraseña correctos dentro de tu código usando const. (Ej. const USUARIO_CORRECTO = "admin";)
        2.	Captura de Datos:
            •   Debes usar la función prompt() para pedirle al usuario su "usuario".
            •   Debes usar la función prompt() para pedirle al usuario su "contraseña".
        3.	Lógica de Intentos:
            •   El usuario tendrá un máximo de 3 intentos para ingresar las credenciales correctas.
            •   Debes usar un ciclo (while o for) para controlar el número de intentos. (Se recomienda while).
        4.	Validación (Lógica de Condicionales):
            •   Si el usuario y la contraseña son correctos: El ciclo debe terminar. Debes mostrar un mensaje de bienvenida en la consola (ej. console.log("¡Bienvenido al sistema!");).
            •   Si las credenciales son incorrectas (pero quedan intentos): Debes informar al usuario (ej. console.log("Datos incorrectos. Intento 2 de 3.");) y el ciclo debe volver a pedir los datos.
            •   Si se agotan los 3 intentos: El ciclo debe terminar. Debes mostrar un mensaje de bloqueo (ej. console.log("Usuario bloqueado. Ha superado el número de intentos.");).
        5.	Encapsulación:
            •   Toda la lógica anterior (variables, ciclo, condicionales) debe estar contenida dentro de una función (ej. function validarAcceso() o const validarAcceso = () => {}).
            •   Al final de tu archivo, debes llamar a esa función para que el programa se ejecute.
        Criterios de Logro Esperados:
            •	El programa se ejecuta sin errores en la consola.
            •	El programa pide correctamente el usuario y la contraseña.
            •	El programa valida correctamente el éxito (===).
            •	El programa gestiona correctamente los 3 intentos (ciclo).
            •	El programa muestra el mensaje de bienvenida o el de bloqueo según corresponda (condicionales).
            •	El código está organizado dentro de, al menos, una función.
*/

const REGISTERED_USERNAME = 'Andres';
const REGISTERED_PASSWORD = 'Andres123*';


function login() {
    for (let i = 0; i < 3; i++) {
        let username = prompt('Ingrese su nombre de usuario');
        let password = prompt('Ingrese su contraseña');

        if (username === REGISTERED_USERNAME && password === REGISTERED_PASSWORD) {
            alert(`Hola, ${username}. ¡Bienvenido(a) al sistema!`);
            return;
        }else {
            if (i === 2) {
                alert(`Usuario bloqueado. Ha superado el número de intentos ${i+1} de 3.`);
            }else {
                alert(`Usuario o contraseña incorrectos. Intento ${i+1} de 3`);
            }
        }
    }
}

login();