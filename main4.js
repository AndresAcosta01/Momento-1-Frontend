const PEAJE = 50;

function pagarPeaje() {

    for (let i = 0; i < 3; i++) {

    let ingresarPeajes = prompt('Ingrese el pago del peaje');

        if(ingresarPeajes === PEAJE){
            console.log('Barrera levantada');
            return;
        }else if (ingresarPeajes < PEAJE){
            if (i === 2) {
                console.log(`El valor ingresado no alcanza. Ha alcanzado el número máximo de intentos ${i+1} de 3`);
            } else{
                console.log(`El valor ingresado no alcanza. Rectifique el valor e ingreselo de nuevo. intento ${i+1} de 3`);
            }
        }else if(ingresarPeajes > PEAJE){
            let devuelta = ingresarPeajes - PEAJE;
            console.log(`Barrera levantada. Su devuelta es: ${devuelta}`);
            return
        } else{
            console.log(`El valor ingresado debe ser un valor numérico. Intento ${i+1} de 3`);
        }
    }
}

    pagarPeaje();

    //Ever Andrés Chávez Acosta




