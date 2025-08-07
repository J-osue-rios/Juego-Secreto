//let titulo = document.querySelector('h1');
//titulo.innerHTML='Juego del numero secreto';
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Selecciona un numero del 1 al 10';

let numeroSecreto = 0;
let intentos=0;
let listaNumeroSorteados=[];
let numeroMaximo=10;
//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    }
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor' );
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor' );
        }
        intentos++;
        limpiarCaja();
    }
    return
}

function limpiarCaja() {
    //Una forma: let valorCaja = document.querySelector('#valurUsuario');
    //valorCaja.value='';
    document.querySelector('#valorUsuario').value='';
    
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //   Ya estan sorteados todos los numeros
    if (listaNumeroSorteados== numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        //Si el numero esta en la lista sino hacer otra
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar intervalo de numeros
    condicionesIniciales();
    //Generar el número aleatorio    
    //deshabilitar el boton de nuevo juego
    //Inicializar el numero de intentos
    //Desahabilitar el boton de nuevo juengp
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
