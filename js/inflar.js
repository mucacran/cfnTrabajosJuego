/*********************************************************************************************************** */
//$('#inflar').reset();
/************************************************ */
//cada vez que se apreta el boton se infla el globo
/************************************************ */
function apretandoParaInflar()
{
    globoJuego = document.getElementById('globoJuego');
    if(secionesJugadas == 1)
    {  
        cronometro();
        $('#empezar').slideUp();
    }
    else if(secionesJugadas < 3)
    {
        //++secionesJugadas;
    }
    else
    {
        return;
    }
    if(contEnPantallaClicks == clickPun_NumeroAleatorio)
    {
        globoJuego.innerHTML = icoBun;
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