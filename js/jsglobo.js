var clickPun = Math.floor((Math.random() * 10) + 1);
console.log(clickPun);
var globoJuego = document.getElementById('globoJuego');
var inflar = document.getElementById('inflar');
var num = 10;
var contador = 1;

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
    var ancho = globoJuego.style.fontSize;
    num -= 1;
    var n = num.toString();
    globoJuego.style.fontSize = n + 'em';
    
});

function cambiarPum()
{
    globoJuego.innerHTML = '💥';
}

//https://codepen.io/julkapuk/pen/vjpZRW