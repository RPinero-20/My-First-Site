document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');

});

function closeNav(){
    document.querySelector('.nav-menu').classList.remove('show');
    
}

function showCalc(){
    document.getElementById("calculadora").style.display = "block";
}

function hideCalc(){
    document.getElementById("calculadora").style.display = "none";
}

function showMemory(){
    document.getElementById("memory").style.display = "block";
}

function hideMemory(){
    document.getElementById("memory").style.display = "none";
}

/* ScrollReveal().reveal('.showcase', {delay: 100}); */
ScrollReveal().reveal('.new-cards', {delay: 50});
ScrollReveal().reveal('.cards-banner-one', {delay: 50});
ScrollReveal().reveal('.cards-banner-two', {delay: 50});
ScrollReveal().reveal('.social', {delay: 50});
ScrollReveal().reveal('.footer-links', {delay: 50});
ScrollReveal().reveal('.footer', {delay: 50});
ScrollReveal().reveal('.contenedor', {delay: 50});
ScrollReveal().reveal('.flex-contact', {delay: 50});

/*/////////////////////*/
    /* CALCULADORA */
/*/////////////////////*/

let datoA;
let datoB;
let operacion;

function init(){

    let operando = document.getElementById("operando");
    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicar = document.getElementById("multiplicar");
    let dividir = document.getElementById("dividir");
    let igual = document.getElementById("igual");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");
    resultado.textContent = resultado.textContent = "Hello World!";
    
    //Eventos
    on.onclick = function(e){
        init();
    }

    off.onclick = function(e){

        resetear();
        hideCalc();
    }

    punto.onclick = function(e){
        operando.textContent = operando.textContent + ".";
    }


    uno.onclick = function(e){
        operando.textContent = operando.textContent + "1";
    }

    dos.onclick=function(e){
        operando.textContent = operando.textContent + "2";
    }

    tres.onclick = function(e){
        operando.textContent = operando.textContent + "3";
    }

    cuatro.onclick = function(e){
        operando.textContent = operando.textContent + "4";
    }

    cinco.onclick = function(e){
        operando.textContent = operando.textContent + "5";
    }

    seis.onclick = function(e){
        operando.textContent = operando.textContent + "6";
    }

    siete.onclick = function(e){
        operando.textContent = operando.textContent + "7";
    }

    ocho.onclick = function(e){
        operando.textContent = operando.textContent + "8";
    }

    nueve.onclick = function(e){
        operando.textContent = operando.textContent + "9";
    }

    cero.onclick = function(e){
        operando.textContent = operando.textContent + "0";
    }

    suma.onclick = function(e){
        datoB = operando.textContent;
        datoA = datoB;
        operacion = "+";
        operando.textContent = "";
        resultado.textContent = datoA + "+";

    }

    resta.onclick = function(e){
        datoB = operando.textContent;
        datoA = datoB;
        operacion = "-";
        operando.textContent = "";
        resultado.textContent = datoA + "-";

    }

    multiplicar.onclick = function(e){
        datoB = operando.textContent;
        datoA = datoB;
        operacion = "*";
        operando.textContent = "";
        resultado.textContent = datoA + "*";

    }

    dividir.onclick = function(e){
        datoB = operando.textContent;
        datoA = datoB;
        operacion = "/";
        operando.textContent = "";
        resultado.textContent = datoA + "/";
        
    }

    igual.onclick = function(e){
        
        datoB = operando.textContent;
        operando.textContent = "";
        resolver();
    }

    reset.onclick = function(e){

        resetear();
        
    }

}

function limpiar(){

    resultado.textContent = "";
    operando.textContent = "";

}

function resetear(){

    operando.textContent = "";
    resultado.textContent = "";
    datoA = 0;
    datoB = 0;
    operacion = "";

}

function resolver(){

    let res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(datoA) + parseFloat(datoB);
            break;
        
        case "-":
            res = parseFloat(datoA) - parseFloat(datoB);
            break;
        
        case "*":
            res = parseFloat(datoA) * parseFloat(datoB);
            break;

        case "/":
            res = parseFloat(datoA) / parseFloat(datoB);
            break;
    }
    //resetear();
    resultado.textContent = res;
}


/*const btns = document.querySelectorAll('.social.links i');

item.addEventListener('mousemove', (evt) => {
    const x = evt.layerx - 60
    const y = evt.layery -60
    const bg = evt.target.querySelector('.bg')
    const i = evt.target.querySelector('i.bx')
    bg.style.transform = 'translate(${x / 8}px, ${y / 8}px)'
    i.style.transform = 'translate(${x / 4}px, ${x / 4}px)'
});

btns.forEach((item) => {
    ...
});

item.addEventListener('mouseenter', (evt) => {
    const bg = evt.target.querySelector('.bg')
    const i = evt.target.querySelector('i.bx')
    bg.style.transition = 'all .15s ease'
    i.style.transition = 'all .15s ease'
    setTimeout(() => {
        bg.style.transition = ''
        i.style.transition = ''

    }, 150);
})

item.addEventListener('mouseleave', (evt) => {
    const bg = evt.target.querySelector('.bg')
    const i = evt.target.querySelector('i.bx')
    bg.style.transition = 'all .25s ease'
    i.style.transition = 'all .25s ease'
    bg.style.transform = 'translate(${0}px, ${0}px)'
    i.style.transform = 'translate(${0}px, ${0}px)'

    setTimeout(() => {
        bg.style.transition = ''
        i.style.transition = ''

    }, 250);
})*/