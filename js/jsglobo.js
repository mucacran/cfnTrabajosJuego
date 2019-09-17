// declarando variables constantes
var num = 0;
var contador = 0;
var clickPun = 0;
var numeroIntento = 0;
var visualizaNumeroIntento;

arrancaValoresDelJuego();

function arrancaValoresDelJuego()
{
    clickPun = Math.floor((Math.random() * 10) + 1);
    console.log(clickPun);
    var globoJuego = document.getElementById('globoJuego');
    var inflar = document.getElementById('inflar');
    num = 10;
    contador = 1;
    numeroIntento = 2;
    visualizaNumeroIntento = document.getElementById('n_intento');
    visualizaNumeroIntento.innerHTML = numeroIntento;
}


function cuentaClicks(){
    globoJuego.style.fontSize = '12px';
}

$('#inflar').click(function(){// primera forma
    var ancho = globoJuego.style.fontSize;
    num += 1;
    if(contador == clickPun)
    {
        cambiarPum();
    }
    else
    {
        contador++;
    }
    var n = num.toString();
    globoJuego.style.fontSize = n + 'em';
    console.log(num);
});

$('#desinflar').click(function(){// primera forma
    --numeroIntento;
    if(numeroIntento < 0)
    {
        console.log('se acabaron los intentos y debes ir a la siguiente página');
    }
    else{
        visualizaNumeroIntento.innerHTML = numeroIntento;
    }
    
});

function cambiarPum()
{
    globoJuego.innerHTML = '💥';
}

//https://codepen.io/julkapuk/pen/vjpZRW