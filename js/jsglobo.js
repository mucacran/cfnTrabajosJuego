var clickPun = Math.floor((Math.random() * 10) + 1);
var globoJuego = document.getElementById('globoJuego');
var inflar = document.getElementById('inflar');
var num = 10;
var contador = 0;

function cuentaClicks(){
    globoJuego.style.fontSize = '12px';
}

$('#inflar').click(function(){// primera forma
    var ancho = globoJuego.style.fontSize;
    num += 1;
    if(contador == clickPun)
    {
        console.log("acaba de reventar");
        console.log(n);
    }
    else
    {
        contador++;
    }
    var n = num.toString();
    //var ancho = globoJuego.css("font-size");
    globoJuego.style.fontSize = n + 'em';
    
});

function cambiarPum()
{
    globoJuego.innerHTML = 💥;
}