// declarando variables constantes
let icoGlobo ='🎈';
let icoBun = '💥';

//botones
var btnInflar = '';
var btnDetener= '';
var btnVolJugar = '';
var idBtn  = ['inflar','desinflar','empezar']; // nombre de los botones desde donde se hará click

//etiqueta p enPantalla
var cronometroP = '';

var id = '';

var btnDetenido = 0;

//cronometro
var tiempoGlobo = 0; // es un numero que va a umentando segun las veses que llame a la funcion funcionando()
var min =   0;    // minutos
var seg =   59;   // segundos
var mils =  60;   // milesegundos

//Lugar donde se imprime por pantalla el globo o globo reventado
var globoJuego = '';

function cronometro(id)
{
    if(tiempoGlobo==0 || id != 'desinflar')
    {
        ejecutaCronometro();
    }
    else
    {
        tiempoGlobo = 0;
    }
}

/*Funcion que hace que los */
function ejecutaCronometro()
{
    globoJuego = document.getElementById('globoJuego');
    if (globoJuego.innerHTML == icoBun || btnDetenido)
    {
        return;
    }
    if(mils != 0)
    {
        --mils;
    }
    else if(mils == 0 && seg == 0)
    {
        return;
    }
    else 
    {
        --seg;
        mils = 59;
    }
    cronometroP = document.getElementById('tiempoCronometro');
    cronometroP.innerHTML = 'Tiempo: ' + LeadingZero(min) + ':' + LeadingZero(seg) + ':' + LeadingZero(mils);
    tiempoGlobo = setTimeout("ejecutaCronometro()", 15);//15 es el tiempo de milesegundos para que cuando llegue a sesenta marque un segundo
}
/*Funcion necesaria para que se imprima por pantalla el 0 delante de
    un numero menos a 10
*/
function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : + Time;
}

//boton Deener
function detenerBtm(presionaBtnDetener)
{
    btnDetenido = parseInt(presionaBtnDetener);
    // return presionaBtnDetener;
}

function hola()
{
    tiempoGlobo = 0; // es un numero que va a umentando segun las veses que llame a la funcion funcionando()
    min =   0;    // minutos
    seg =   59;   // segundos
    mils =  60;   // milesegundos
    btnDetenido = 0;
    console.log('me presionaron tambien');
}