function sumaTotal(v1,v2)
        {
            var textoDelate = 'Entre $';
            var textoEnmedio = ' mil y $';
            var textoFinal = ' mil';

            if(v1 == 230 && v2 == 230)
            {
                var sumando   = document.getElementById('sumando');
                sumando.value = 'Menos de $' + v1 + ' mil';
            }
            else if(v1 == 620 && v2 == 620)
            {
                var sumando   = document.getElementById('sumando');
                sumando.value = 'Mas de $' + v2 + ' mil';
            }
            else if(idValor1[0] == idValor1[1] && idValor2[0] == idValor2[1] && idValor3[0] == idValor3[1] && idValor4[0] == idValor4[1])
            {
                if(v1 == 150 || v1 == 155 || v1 == 215 || v1 == 60 || v1 == 5 || v1 == 75 || v1 == 15 || v1 == 80 || v1 == 210 || v1 == 165)
                {
                    var sumando   = document.getElementById('sumando');
                    sumando.value = 'Menos de $' + v1 + ' mil';
                }
                else if(v1 == 450 || v1 == 485 || v1 == 575 || v1 && 620 )
                {
                    var sumando   = document.getElementById('sumando');
                    sumando.value = 'Mas de $' + v2 + ' mil';
                }
                else
                {
                    var sumando   = document.getElementById('sumando');
                    sumando.value = '$' + v2 + ' mil';                    
                }
            }
            else
            {
                var sumando   = document.getElementById('sumando');
                sumando.value = textoDelate + v1 + textoEnmedio + v2 + textoFinal;
            }
        }