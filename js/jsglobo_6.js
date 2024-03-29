var idPrintPant = ''; //id que represtenta la etiqueta p donde se imprime por pantalla los puntos ganados id = puntoGanPer
// declarando variables constantes
let icoGlobo ='🎈';
var icoBun = '💥';

//botones
var btnInflar = '';
var btnDetener= '';
var btnVolJugar = '';
// nombre de los botones desde donde se hará click
var idBtn  = ['inflar','desinflar','empezar']; 

//etiqueta p enPantalla
var cronometroP = '';
//arranca con 0 pero cuando apretan el boton de detener este cambia a 1
var btnDetenido = 0; 
//cronometro
var tiempoGlobo = 0; // es un numero que va a umentando segun las veses que llame a la funcion funcionando()
var min =   0;    // minutos
var seg =   59;   // segundos
var mils =  60;   // milesegundos

//Lugar donde se imprime por pantalla el globo o globo reventado
var globoJuego = document.getElementById('globoJuego');

//cuenta el numero de seciones jugadas
var secionesJugadas = 0;var numero = 0;

// este cuenta por pantalla las veses que hace clik en inflar
var contEnPantallaClicks = 0;
var clickPun_NumeroAleatorio = 0; //numero aleatorio

////////////VALOR DE LAS 3 SESIONES//////////
var secion1 = '0';
var secion2 = '0';
var secion3 = '0';
/////////////////////////////////////////////

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
    globoJuego = document.getElementById('globoJuego');
    if (globoJuego.innerHTML == icoBun || btnDetenido)
    {
        numeroSeccion3();
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
        $('#inflar').slideUp();
        $('#desinflar').slideUp();
        if(secionesJugadas < 3)
        {
            $('#siguiente').slideDown('show');
        }
        else
        {
            $('#empezar').slideDown('show');
        }
        
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

//boton Detener
function detenerBtm(presionaBtnDetener)
{
    btnDetenido = parseInt(presionaBtnDetener);
    ++secionesJugadas;
    $('#inflar').slideUp();
    $('#desinflar').slideUp();
    $('#empezar').slideDown('show');
    puntoGanados();
    
}

function empiezaCronometro2()
{
    if(secionesJugadas < 3)
    {
        tiempoGlobo = 0; // es un numero que va a umentando segun las veses que llame a la funcion funcionando()
        min =   0;    // minutos
        seg =   59;   // segundos
        mils =  60;   // milesegundos

        document.getElementById('click-Veses').innerHTML = '0'; // regresa a cero cuando empiza otra vez

        globoJuego.innerHTML = icoGlobo; // vuelvo a dejar el globo como estaba 
        globoJuego.style.fontSize = '10em'; //regresa al globo en el tamaño normal num.toString()
        numeroAlwatorio(); // declara un nuevo numero aleatorio
        contEnPantallaClicks = 0 ; //el numero que se imprime por pantalla regresa a sero

        console.log(secionesJugadas + ' sesiones jugadas');
        
        $('#inflar').slideDown('show');
        $('#desinflar').slideDown('show');
        $('#empezar').slideUp();
        ejecutaCronometro();
    }
    else
    {
        $('#siguiente').slideDown('show');
        //siguientePagina();
    }
    
    if(btnDetenido != 0)
    {
        btnDetenido = 0;
        if (secionesJugadas < 3)
        {
            ejecutaCronometro();
        }
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
    //globoJuego.innerHTML = icoGlobo;
}
/*********************************************************************************************************** */
//$('#inflar').reset();
/************************************************ */
//cada vez que se apreta el boton se infla el globo
/************************************************ */
function apretandoParaInflar()
{
    if(secionesJugadas == 0)
    {  
        cronometro();
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

//////////////////////////////////////////////////////////
/* Funcion que imprime por pantalla los puntos ganados  */
//////////////////////////////////////////////////////////
function puntoGanados()
{
    if (globoJuego.innerHTML == icoBun || cronometroP.innerHTML == 'Tiempo: 00:00:00')
    {
        var numeroPantalla = parseInt(document.getElementById('click-Veses').innerHTML);
        ++numero; 
        idPrintPant.innerHTML = 'Has perdido ' + multiplicaXdiez(numeroPantalla) + ' puntos';
        valorPorSeciones(numero);
    }
    else
    {
        ++numero;
        var numeroPantalla = parseInt(document.getElementById('click-Veses').innerHTML);
        idPrintPant.innerHTML = 'Has ganado: '  + multiplicaXdiez(numeroPantalla) + ' puntos';
        valorPorSeciones(numero);
    }
}
/*Funcion necesaria para que se imprima por pantalla el 0 delante de
    un numero menos a 10
*/
function multiplicaXdiez(a) {
    return (a < 10 ) ? a*10 : a;
}

/*****************************************************************************/
//este hace que se imprima por pantalla el numero de veses que hace click
/*****************************************************************************/
function prinPantallaNumero(contador)
{
    var numero = document.getElementById('click-Veses');
    numero.innerHTML = contador;
}
/*********************************************************************************************************************** */

////////Guarda el valor por seccines de lo que esta en los puntos ganados o perdidos; lo que se imprime dentro del id:puntoGanPer en el html////
function valorPorSeciones(numero)
{
    if(numero == 1)
    {
        secion1 = idPrintPant.innerHTML;
        console.log(secion1);
    }
    else if(numero == 2)
    {
        secion2 = idPrintPant.innerHTML;
        console.log(secion2);
    }
    else
    {
        secion3 = idPrintPant.innerHTML;
        console.log(secion3);
    }
}

////////////////////////////////////////CUANDO SE TERMNIA PASA ESTO EMPIEZA A LA SIGUIENTE PAGINA//////////
function siguientePagina()
{    
    $('#empezar').on(click,function(){
        //window.location.href = "http://www.w3schools.com?resultado=" + para1 + para2 + para3 ;
        //window.location.href = 'http://www.w3schools.com';
        window.location = "encuestaFuncionarios.html";
    });
}

function numeroSeccion3()
{
    if(secionesJugadas > 2 )
    {
        $('#siguiente').slideDown('show');
    }
}