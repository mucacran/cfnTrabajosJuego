// declarando variables constantes
var num = 0;
var contador = 0;
var clickPun = 0;
var numeroIntento = 2;
var globoJuego = document.getElementById('globoJuego');

var visualizaNumeroIntento;
visualizaNumeroIntento = document.getElementById('n_intento');
//visualizaNumeroIntento.innerHTML = numeroIntento;

arrancaValoresDelJuego(contador);

function arrancaValoresDelJuego(contador)
{
    //clickPun = Math.floor((Math.random() * 10) + 1); numero aleatorio entre 0 y 10
    var min = 6;
    var max = 10;
    clickPun =  parseInt(Math.random() * (max - min) + min); // numero aleatorio entre un numero especifico y un numero maximo osea  eje. mayor que 6  y menor que 10
    
      
    console.log(clickPun);
    globoJuego.innerHTML = '🎈';
    num = 10;
    contador = contador;
}

$('#inflar').click(function(){
    
    var ancho = globoJuego.style.fontSize;
    num += 1;
    if(contador == clickPun)
    {
        cambiarPum();
        return;
    }
    else
    {
        contador++;
        prinPantallaNumero(contador);
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
        window.location = "encuesta.html"
        return;
    }
    else{
        globoJuego.style.fontSize =  '10 em';
        contador = 0;
        arrancaValoresDelJuego(contador);
        visualizaNumeroIntento.innerHTML = numeroIntento;
    }
    globoJuego.style.fontSize = '10em';
});

function cambiarPum()
{
    globoJuego.innerHTML = '💥';
}


//este hace que se imprima por pantalla el numero de veses que hace click
function prinPantallaNumero(contador)
{
    var numero = document.getElementById('click-Veses');
    numero.innerHTML = contador;
}
//https://codepen.io/julkapuk/pen/vjpZRW


/********************CRONOMETRO************************/


function cronometro()
{
    var cronometro = document.getElementById("tiempoCronometro");
    var conteo = 0;
    var segundo = 0;
    var minuto = 0;
    
        setInterval( function()
        {
            if(conteo==60)
            {
                conteo = 0;
                ++segundo;
            }
            else if(segundo == 60)
            {
                segundo = 0;
                ++minuto;
            }
            else
            {
                cronometro.innerHTML = "Tiempo: " + minuto + " : " + segundo + " : " + conteo;
                ++conteo;
            }
        },15);
    
}