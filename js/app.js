// Declaramos las variables que almacenan cada una de las caras de los dados
let dado1 =0, dado2=0, dado3=0, pj1=0, pj2=0, rondas=0, contador=1;

// Creamos una función para generar las caras de los dados aleatoriamente y 
// para mostrar las imagenes del jugador correspondiente
function dados(img1, img2, img3) {
    // Generamos los numeros aleatorios de las caras de los dados
    // Math.floor() -> es un metodo que se utiliza para redondear hacia abajo 
    // Math.random() -> es un metodo que se utiliza para generar un numero 
    // aleatorio entre 0 y 1
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;
    dado3 = Math.floor(Math.random() * 6) + 1;

    // Sustituimos la imagen actual por la cara de uno de los dados
    // Utilizamos interpolación de variables ${variable} con comillas invertidas para que
    // la imagen sea la correcta segun la cara generada aleatoriamente
    img1.src = `imagenes/${dado1}.jpg`; 
    img2.src = `imagenes/${dado2}.jpg`; 
    img3.src = `imagenes/${dado3}.jpg`; 
    console.log(dado1,dado2,dado3);
}  

// Creamos una función para calcular el puntaje obtenido del jugador 
function calcularPuntaje(d1,d2,d3) {
    // Operadores lógicos y -> &&; o -> ||; no -> !
    if(d1 == d2 && d1 == d3)
        return 15;
    else if(d1 == d2 || d1 == d3 || d2 == d3)
        return 8;
    else if(d1+d2+d3 > 15)
        return 10;
    else if(d1+d2+d3 > 10)
        return 5;
    else 
        return 6;
} 

function finDelJuego() {
    alert('Juego finalizado');
}

// Almacenamos en la variable btnj1 el objeto del boton que se encuentra
// en código HTML del jugador 1
// document -> hace referencia a la página HTML
// getElementById() -> es un metodo que se utiliza para obtener el objeto 
// HTML a través de su ID
let btnj1 = document.getElementById('btnj1');
let btnj2 = document.getElementById('btnj2'); 

// addEventListener(evento, callback: es una funcion anonima) -> es un metodo que se utiliza para asignar eventos
// a un objeto. Es este caso, se asignará el evento click
btnj1.addEventListener('click', () => {
    // Mostramos las imagenes de las caras de los dados que obtuvimos
    // aleatoriamente
    let img1j1 = document.getElementById('img1j1');
    let img2j1 = document.getElementById('img2j1');
    let img3j1 = document.getElementById('img3j1');
    dados(img1j1, img2j1, img3j1);
    pj1 += calcularPuntaje(dado1,dado2,dado3);
    document.getElementById('puntaje1').innerText = pj1;
    btnj1.disabled = true;
    btnj2.disabled = false;
})            

btnj2.addEventListener('click', () => {
    let img1j2 = document.getElementById('img1j2');
    let img2j2 = document.getElementById('img2j2');
    let img3j2 = document.getElementById('img3j2');
    dados(img1j2, img2j2, img3j2);
    pj2 += calcularPuntaje(dado1,dado2,dado3);
    document.getElementById('puntaje2').innerText = pj2;
    btnj1.disabled = false;
    btnj2.disabled = true;
    if(contador == rondas){
        finDelJuego();
    } else {
        contador++;
    }
})

// Mostramos los nombres de los jugadores en cada uno de los paneles
// correspondiente
document.getElementById('btnComenzar').addEventListener('click',() => {
    // La propiedad value devuelve el valor del objeto html
    // La propiedad disabled activa/desactiva un elemento html
    document.getElementById('nj1').innerText = document.getElementById('j1').value;
    document.getElementById('nj2').innerText = document.getElementById('j2').value;
    document.getElementById('btnComenzar').disabled = true;
    btnj1.disabled = false;
    rondas = parseInt(document.getElementById('rondas').value);
})