//https://codepen.io/julkapuk/pen/vjpZRW
/*******************CRONOMETRO************************/
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