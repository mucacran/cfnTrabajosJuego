//iconos del globo el globo
let icoGlobo ='🎈';
let icoBun = '💥';

//seciones
let secionesJugadas = 0;
//arranca con 0 pero cuando apretan el boton de detener este cambia a 1
let btnDetenido = 0; 

//id de las etiquetas html
var numClicksPorPantalla = document.getElementById('click-Veses'); // linea 58
var globoJuego = document.getElementById('globoJuego'); // lugar donde se imprime el logo por pantalla
var cronometroP = document.getElementById('tiempoCronometro');
var idPrintPant = document.getElementById('puntoGanPer'); //id que represtenta la etiqueta p donde se imprime por pantalla los puntos ganados id = puntoGanPer

// variables para el tiempo
var tiempoGlobo = 0; // es un numero que va a umentando segun las veses que llame a la funcion funcionando()
var min =   0;    // minutos
var seg =   59;   // segundos
var mils =  60;   // milesegundos

function empiezaCronometro2()
{
    if(secionesJugadas < 3)
    {
        tiempoGlobo = 0; // es un numero que va a umentando segun las veses que llame a la funcion funcionando()
        min =   0;    // minutos
        seg =   10;   // segundos
        mils =  60;   // milesegundos

        numClicksPorPantalla.innerHTML = '0'; // regresa a cero cuando empiza otra vez

        globoJuego.innerHTML = icoGlobo; // vuelvo a dejar el globo como estaba 
        globoJuego.style.fontSize = '10em'; //regresa al globo en el tamaño normal num.toString()
        numeroAlwatorio(); // declara un nuevo numero aleatorio
        contEnPantallaClicks = 0 ; //el numero que se imprime por pantalla regresa a sero

        console.log('> ' + secionesJugadas + ' sesiones jugadas');
        
        verInflaryDesinflar();
        ejecutaCronometro();
    }
    else
    {
        esconderInflaryDesinflar();
        //siguientePagina();
    }
}

/*****************************************************************************************************************************/
// Funcion que crea un numero a penas se carga la pagina entre 5 y 10
// tambien le da un valor a un div para que inicie con un globo en pantalla
/************************************************ */
function numeroAlwatorio()
{
    //clickPun_NumeroAleatorio = Math.floor((Math.random() * 10) + 1); numero aleatorio entre 0 y 10
    var min = 5;
    var max = 10;
    clickPun_NumeroAleatorio =  parseInt(Math.random() * (max - min) + min); // numero aleatorio entre un numero especifico y un numero maximo osea  eje. mayor que 6  y menor que 10
      
    console.log(clickPun_NumeroAleatorio);
}

function cronometro()
{
    if(tiempoGlobo==0)
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
        ++secionesJugadas;
        puntoGanados();
        esconderInflaryDesinflar();
        return;
    }
    else 
    {
        --seg;
        mils = 59;
    }

    cronometroP.innerHTML = 'Tiempo: ' + LeadingZero(min) + ':' + LeadingZero(seg) + ':' + LeadingZero(mils);
    tiempoGlobo = setTimeout("ejecutaCronometro()", 15);//15 es el tiempo de milesegundos para que cuando llegue a sesenta marque un segundo
}
/*Funcion necesaria para que se imprima por pantalla el 0 delante de
    un numero menos a 10
*/
function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : + Time;
}

function esconderInflaryDesinflar()
{
    if(secionesJugadas >= 3)
    {
        $('#inflar').slideUp();
        $('#desinflar').slideUp();
        $('#siguiente').slideDown('show');
    }
    else{
        $('#inflar').slideUp();
        $('#desinflar').slideUp();
        $('#empezar').slideDown('show');
    }
    
}

function verInflaryDesinflar()
{
    $('#inflar').slideDown('show');
    $('#desinflar').slideDown('show');
    $('#empezar').slideUp();
}

//////////////////////////////////////////////////////////
/* Funcion que imprime por pantalla los puntos ganados  */
//////////////////////////////////////////////////////////
function puntoGanados()
{
    if (globoJuego.innerHTML == icoBun || cronometroP.innerHTML == 'Tiempo: 00:00:00')
    {
        var numeroPantalla = parseInt(numClicksPorPantalla.innerHTML);
        idPrintPant.innerHTML = 'Has perdido ' + multiplicaXdiez(numeroPantalla) + ' puntos';
    }
    else
    {
        var numeroPantalla = parseInt(numClicksPorPantalla.innerHTML);
        idPrintPant.innerHTML = 'Has ganado: '  + multiplicaXdiez(numeroPantalla) + ' puntos';
    }
}
/*Funcion necesaria para que se imprima por pantalla el 0 delante de
    un numero menos a 10
*/
function multiplicaXdiez(a) {
    return (a < 10 ) ? a*10 : a;
}

///////////////////////////////////////////////////////////////BOTON DE INFLAR
/************************************************ */
//cada vez que se apreta el boton se infla el globo
/************************************************ */
function apretandoParaInflar()
{
    if(secionesJugadas == 0)
    {
        $('#empezar').slideUp();
        if(contEnPantallaClicks == clickPun_NumeroAleatorio)
        {
            $('#inflar').slideUp();
            $('#desinflar').slideUp();
            globoJuego.innerHTML = icoBun;
            ++secionesJugadas;
            numeroSeccion3();
            if(btnDetenido == 0)
            {
                btnDetenido = 1;
            }
            $('#empezar').slideDown('show');
            puntoGanados();
            return;
        }
        else
        {
            ++contEnPantallaClicks;
            prinPantallaNumero(contEnPantallaClicks);
        }
        globoJuego.style.fontSize = '1' + contEnPantallaClicks + 'em'; //num.toString()
        idPrintPant = document.getElementById('puntoGanPer');
        idPrintPant.innerHTML = '+'  + multiplicaXdiez(contEnPantallaClicks) + ' puntos'; // este imprime por pantalla si ganas conforme avanza los clicks
    }
    else if(secionesJugadas < 3)
    {
        if(contEnPantallaClicks == clickPun_NumeroAleatorio)
        {
            $('#inflar').slideUp();
            $('#desinflar').slideUp();
            globoJuego.innerHTML = icoBun;
            ++secionesJugadas;
            numeroSeccion3();
            if(btnDetenido == 0)
            {
                btnDetenido = 1;
            }
            $('#empezar').slideDown('show');
            puntoGanados();
            return;
        }
        else
        {
            ++contEnPantallaClicks;
            prinPantallaNumero(contEnPantallaClicks);
        }
        globoJuego.style.fontSize = '1' + contEnPantallaClicks + 'em'; //num.toString()
        idPrintPant = document.getElementById('puntoGanPer');
        idPrintPant.innerHTML = '+'  + multiplicaXdiez(contEnPantallaClicks) + ' puntos'; // este imprime por pantalla si ganas conforme avanza los clicks
    }
    else
    {
        siguientePagina();
    }
}
function prinPantallaNumero(contador)
{
    numClicksPorPantalla.innerHTML = contador;
}