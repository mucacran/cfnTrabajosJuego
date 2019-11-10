//iconos del globo el globo
let icoGlobo ='🎈';
let icoBun = '💥';

//seciones
let secionesJugadas = 0;
//arranca con 0 pero cuando apretan el boton de detener este cambia a 1
let btnDetenido = 0; 

//id de las etiquetas html
var numClicksPorPantalla = document.getElementById('click-Veses'); //numero de clicks en la pantalla linea 58
var globoJuego = document.getElementById('globoJuego'); // lugar donde se imprime el logo por pantalla
var cronometroP = document.getElementById('tiempoCronometro');
var idPrintPant = document.getElementById('puntoGanPer'); //id que represtenta la etiqueta p donde se imprime por pantalla los puntos ganados id = puntoGanPer
var urlPagina = document.getElementById('siguiente').href;
var presentarResultado = document.getElementById('presentarResultado');

// variables para el tiempo
var tiempoGlobo = 0; // es un numero que va a umentando segun las veses que llame a la funcion funcionando()
var min =   0;    // minutos
var seg =   59;   // segundos
var mils =  60;   // milesegundos

////////////VALOR DE LAS 3 SESIONES//////////
var secion1 = ['0',0];
var secion2 = ['0',0];
var secion3 = ['0',0];
var puntosAcumuladoSecciones = 0;
/////////////////////////////////////////////

function empiezaCronometro2()
{
    if(secionesJugadas < 3)
    {
        tiempoGlobo = 0; // es un numero que va a umentando segun las veses que llame a la funcion funcionando()
        min =   0;    // minutos
        seg =   20;   // segundos
        mils =  60;   // milesegundos

        numClicksPorPantalla.innerHTML = '0'; // regresa a cero cuando empiza otra vez

        globoJuego.innerHTML = icoGlobo; // vuelvo a dejar el globo como estaba 
        globoJuego.style.fontSize = '10em'; //regresa al globo en el tamaño normal num.toString()
        numeroAlwatorio(); // declara un nuevo numero aleatorio
        contEnPantallaClicks = 0 ; //el numero que se imprime por pantalla regresa a sero
        
        console.log('> ' + secionesJugadas + ' sesiones jugadas');
        ejecutaCronometro();
        verInflaryDesinflar();
    }
    else
    {
        return;
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
        btnDetenido = 0;
        return;
    }
    if(mils != 0)
    {
        --mils;
    }
    else if(mils == 0 && seg == 0)
    {
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
    if(secionesJugadas >= 2)
    {
        $('#inflar').hide();
        $('#desinflar').hide();
        $('#siguiente').slideDown('show');
        
    }
    else{
        ++secionesJugadas;
        $('#inflar').hide();
        $('#desinflar').hide();
        $('#empezar').slideDown('show');
    }
}

function verInflaryDesinflar()
{
    $('#inflar').slideDown('show');
    $('#desinflar').slideDown('show');
    $('#empezar').hide();
}

//////////////////////////////////////////////////////////
/* Funcion que imprime por pantalla los puntos ganados  */
//////////////////////////////////////////////////////////
function puntoGanados()
{
    var numeroPantalla = 0;
    if (globoJuego.innerHTML == icoBun || cronometroP.innerHTML == 'Tiempo: 00:00:00')
    {
        numeroPantalla = parseInt(numClicksPorPantalla.innerHTML);
        //puntosAcumuladoSecciones -= (secionesJugadas == 0) ? 0: numeroPantalla ;
        puntosAcumuladoSecciones -= numeroPantalla;
        idPrintPant.innerHTML = 'Has perdido ' + multiplicaXdiez(numeroPantalla) + ' puntos';
    }
    else
    {
        numeroPantalla = parseInt(numClicksPorPantalla.innerHTML);
        puntosAcumuladoSecciones += numeroPantalla;
        idPrintPant.innerHTML = 'Has ganado: '  + multiplicaXdiez(numeroPantalla) + ' puntos';
    }
    valorPorSeciones(numeroPantalla);
}
/*Funcion necesaria para que se imprima por pantalla el 0 delante de
    un numero menos a 10
*/
function multiplicaXdiez(a) {
    return (a < 10 ) ? a*10 : a;
}


/*************DETENER Y GANAR PUNTOS del boton detener********************/
function detenerBtm(presionaBtnDetener)
{
    btnDetenido = parseInt(presionaBtnDetener);
    puntoGanados();
    esconderInflaryDesinflar();
}

///////////////////////////////////////////////////////////////BOTON DE INFLAR
/************************************************ */
//cada vez que se apreta el boton se infla el globo
/************************************************ */
function apretandoParaInflar()
{
    if(secionesJugadas < 3 )
    {
        if(contEnPantallaClicks == clickPun_NumeroAleatorio)
        {
            globoJuego.innerHTML = icoBun;
            puntoGanados();
            esconderInflaryDesinflar();
            return;
        }
        else
        {
            ++contEnPantallaClicks;
            prinPantallaNumero(contEnPantallaClicks);
            globoJuego.style.fontSize = '1' + contEnPantallaClicks + 'em'; //num.toString()
            idPrintPant.innerHTML = '+'  + multiplicaXdiez(contEnPantallaClicks) + ' puntos'; // este imprime por pantalla si ganas conforme avanza los clicks
        }
    }
}
function prinPantallaNumero(contador)
{
    numClicksPorPantalla.innerHTML = contador;
}

////////Guarda el valor por seccines de lo que esta en los puntos ganados o perdidos; lo que se imprime dentro del id:puntoGanPer en el html////
function valorPorSeciones(numeroPantalla)
{
    if(secionesJugadas == 0)
    {
        secion1[0] = idPrintPant.innerHTML;
        secion1[1] = numeroPantalla;
        console.log('resultado 1 seccion: ' + secion1);
    }
    else if(secionesJugadas == 1)
    {
        secion2[0] = idPrintPant.innerHTML;
        secion2[1] = numeroPantalla;
        console.log('resultado 2 seccion: ' + secion2);
    }
    else
    {
        secion3[0] = idPrintPant.innerHTML;
        secion3[1] = numeroPantalla;
        console.log('resultado 3 seccion: ' + secion3);
    }
}

function presentarValorPorPantalla()
{
    var loqueEres = '';
    
    $('#presentarResultado').slideDown('show');
    
    console.log('este es tu ganancias:' + puntosAcumuladoSecciones);

    if(puntosAcumuladoSecciones < 0)
    {
        if(secion1[1] > 4 && secion2[1] > 4 && secion3[1] > 4)
        {
            loqueEres = '<b>Eres un perdedor pero arriesgado</b>';
        }
        else
        {
            loqueEres = '<b>Eres un perdedor<b>';
        }
    }
    else if(secion1[1] > 5 && secion2[1] > 5 && secion3[1] > 5)
    {
        loqueEres = 'Eres Arriesgado';
    }
    else
    {
        loqueEres = 'Eres indesiso';
    }
    var resultadoPorseccions = 'Sección1 :' + secion1[0] + '<br>Sección2 :' + secion2[0] + '<br>Sección3 :' + secion3[0] + '<br>' + puntosAcumuladoSecciones +'0<br>Resultado: ' + loqueEres;
    presentarResultado.innerHTML = '<div style="background-color: #fff;width: 300px;box-sizing: border-box;height: auto;padding:15px;text-align: center;">'+ resultadoPorseccions + '</div> ';
}