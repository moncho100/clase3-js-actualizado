//Ejemplo 1 FOR

let numero = parseInt(prompt("Ingrese un numero"))

for(i = 0; i <= 10; i++){
resultado = numero * i;
    console.log("El resultado de su numero ingresado " + numero + " X " + i + " es: " + resultado);
}

//Ejemplo FOR - BREAK

for(let m = 2; m <= 20; m++){
    //una vez que llegue a la repeticion 15 corta el ciclo ahi, antes de la 16
    if(m == 16){
        break;
    }
    console.log(m);
}

//Ejemplo FOR - CONTINUE

for(let f = 1; f <= 17; f++){
    //una vez que llegue a la repeticion 9 que la siguiente sea la 11, es decir saltea la repeticion 10
    if(f == 10){
        continue;
    }
    console.log(f);
}
