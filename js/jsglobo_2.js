// declarando variables constantes
var num = 0;
var contador = 0;
var clickPun_NumeroAleatorio = 0;
var numeroIntento = 3;
var globoJuego = document.getElementById('globoJuego'); // este es el lugar donde se imprime el globo por pantalla; el dibujo del globo
var cronometro = document.getElementById('tiempoCronometro'); // este es el cronometro
let icoGlobo ='🎈';
let icoBun = '💥';
var printPant = document.getElementById('puntoGanPer');// este id corresponde a los puntos que se imprime por pantalla
var visualizaNumeroIntento = document.getElementById('n_intento'); // este marca el numero de intentos por pantalla y va restando desde el 3 hasta 0
var botonDetener = document.getElementById('desinflar');
var $btnEmpezar = $('#empezar');

arrancaValoresDelJuego(contador);

/************************************************ */
// Funcion que crea un numero a penas se carga la pagina entre 5 y 10
// tambien le da un valor a un div para que inicie con un globo en pantalla
/************************************************ */
function arrancaValoresDelJuego(contador)
{
    //clickPun_NumeroAleatorio = Math.floor((Math.random() * 10) + 1); numero aleatorio entre 0 y 10
    var min = 5;
    var max = 10;
    clickPun_NumeroAleatorio =  parseInt(Math.random() * (max - min) + min); // numero aleatorio entre un numero especifico y un numero maximo osea  eje. mayor que 6  y menor que 10
      
    console.log(clickPun_NumeroAleatorio);
    globoJuego.innerHTML = icoGlobo;
    num = 10;
    contador = contador;
}

var tiempoGlobo = 0; // es un numero que va a umentando segun las veses que llame a la funcion funcionando()
var a =     60;   // milesegundos
var min =   0;    // minutos
var seg =   59;   // segundos

function cronometro(b)
{
    if(tiempoGlobo==0)
    {
        funcionando(b);
    }
    else
    {
        tiempoGlobo=0;
    }
}

/*Funcion que hace que los */
function funcionando(b)
{
    if (globoJuego.innerHTML == icoBun || b == 'desinflar')
    {
        return;
    }
    if(a != 0)
    {
    --a;
    }
    else if(a == 0 && seg == 0)
    {
        return;
    }
    else 
    {
        --seg;
        a = 59;
    }
    cronometro.innerHTML = 'Tiempo: ' + LeadingZero(min) + ':' + LeadingZero(seg) + ':' + LeadingZero(a);
    tiempoGlobo = setTimeout("funcionando()", 15);//15 es el tiempo de milesegundos para que cuando llegue a sesenta marque un segundo
}
/*Funcion necesaria para que se imprima por pantalla el 0 delante de
    un numero menos a 10
*/
function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : + Time;
}

/************************************************ */
// cada vez que se apreta el boton se infla el globo
/************************************************ */
$('#inflar').click(function(){
    num += 1;
    if(contador == clickPun_NumeroAleatorio)
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
    printPant.innerHTML = '+'  + multiplicaXdiez(contador) + ' puntos'; // este imprime por pantalla si ganas conforme avanza los clicks
});

/************************************************ */
//este boton hace que pare de jugar en una secion y balla a la siguiente
/************************************************ */
$('#desinflar').click(function(){
    //document.getElementById('empezar').sndToAS("pause");
    --numeroIntento;
    if(numeroIntento < 0)
    {
        console.log('se acabaron los intentos y debes ir a la siguiente página');
        //window.location = "encuestaFuncionarios.html"
        return;
    }
    else{
        puntoGanados();
        globoJuego.style.fontSize =  '10 em';
        contador = 0;
        arrancaValoresDelJuego(contador);
        visualizaNumeroIntento.innerHTML = numeroIntento;
        $('#inflar').reset;
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

//////////////////////////////////////////////////////////
/* Funcion que imprime por pantalla los puntos ganados  */
//////////////////////////////////////////////////////////
var numero = 0;
function puntoGanados()
{
    if (globoJuego.innerHTML == icoBun)
    {
        var numeroPantalla = parseInt(document.getElementById('click-Veses').innerHTML);
        numero -= numeroPantalla; 
        printPant.innerHTML = 'Has perdido ' + multiplicaXdiez(numeroPantalla) + ' puntos';
    }
    else
    {
        var numeroPantalla = parseInt(document.getElementById('click-Veses').innerHTML);
        numero += numeroPantalla;
        printPant.innerHTML = 'Has ganado: '  + multiplicaXdiez(numeroPantalla) + ' puntos';
    }
}
/*Funcion necesaria para que se imprima por pantalla el 0 delante de
    un numero menos a 10
*/
function multiplicaXdiez(a) {
    return (a < 10 ) ? a*10 : a;
}