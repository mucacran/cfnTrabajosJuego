// declarando variables constantes
var num = 0;
var contador = 0;
var clickPun = 0;
var numeroIntento = 2;
var globoJuego = document.getElementById('globoJuego'); // este es el lugar donde se imprime el globo por pantalla
var cronometro = document.getElementById('tiempoCronometro'); // este es el cronometro
let icoGlobo ='🎈';
let icoBun = '💥';

var visualizaNumeroIntento;
visualizaNumeroIntento = document.getElementById('n_intento');


arrancaValoresDelJuego(contador);

/************************************************ */
// Funcion que crea un numero a penas se carga la pagina entre 6 y 10
// tambien le da un valor a un div para que inicie con un globo en pantalla
/************************************************ */
function arrancaValoresDelJuego(contador)
{
    //clickPun = Math.floor((Math.random() * 10) + 1); numero aleatorio entre 0 y 10
    var min = 6;
    var max = 10;
    clickPun =  parseInt(Math.random() * (max - min) + min); // numero aleatorio entre un numero especifico y un numero maximo osea  eje. mayor que 6  y menor que 10
      
    console.log(clickPun);
    globoJuego.innerHTML = icoGlobo;
    num = 10;
    contador = contador;
}

/************************************************ */
//cada vez que se apreta el boton se infla el globo
/************************************************ */
$('#inflar').click(function(){
    num += 1;
    if(contador == clickPun)
    {
        cambiarPum();
        puntoGanados();
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

/************************************************ */
//este boton hace que pare de jugar en una secion y balla a la siguiente
/************************************************ */
$('#desinflar').click(function(){
    --numeroIntento;
    if(numeroIntento < 0)
    {
        console.log('se acabaron los intentos y debes ir a la siguiente página');
        window.location = "encuestaFuncionarios.html"
        return;
    }
    else{
        puntoGanados();
        globoJuego.style.fontSize =  '10 em';
        contador = 0;
        arrancaValoresDelJuego(contador);
        visualizaNumeroIntento.innerHTML = numeroIntento;
    }
    globoJuego.style.fontSize = '10em';
});

/************************************************ */
//cambia de imagen del globo por la que explota
/************************************************ */
function cambiarPum()
{
    globoJuego.innerHTML = icoBun;
}

/************************************************ */
//este hace que se imprima por pantalla el numero de veses que hace click
/************************************************ */
function prinPantallaNumero(contador)
{
    var numero = document.getElementById('click-Veses');
    numero.innerHTML = contador;
}
//https://codepen.io/julkapuk/pen/vjpZRW


/********************CRONOMETRO************************/

$('#empezar').on('click',function()
{
    var conteo = 0;
    var segundo = 0;
    var minuto = 0;
    var cronometroCorriendo;
    
    
    setInterval(function()
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
            cronometroCorriendo = "Tiempo: " + minuto + " : " + segundo + " : " + conteo;
            if(cronometroCorriendo == "Tiempo: 1 : 0 : 1")
            {
                return;
            }
            else
            {
                cronometro.innerHTML = cronometroCorriendo ;
                ++conteo;
            }
        }
    },15);
    $('#empezar').hide();
});
//////////////////////////////////////////////////////////
/* Funcion que imprime por pantalla los puntos ganados  */
//////////////////////////////////////////////////////////
var numero = 0;
function puntoGanados()
{   
    
    var printPant = document.getElementById('puntoGanPer');

    if (globoJuego.innerHTML == icoBun)
    {
        var numeroPantalla = parseInt(document.getElementById('click-Veses').innerHTML);
        numero -= numeroPantalla; 
        printPant.innerHTML = 'Haz perdido ' + numeroPantalla + ' puntos' + ' | Acumulado: ' +  numero ;
    }
    else
    {
        var numeroPantalla = parseInt(document.getElementById('click-Veses').innerHTML);
        numero += numeroPantalla;
        printPant.innerHTML = 'Haz ganado '  + numeroPantalla + ' puntos' + ' | Acumulado: ' +  numero;
    }
}