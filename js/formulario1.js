
        let idArray = ['alinearTypeRadios1', 'alinearTypeRadios2', 'alinearTypeRadios3', 'alinearTypeRadios4'];
        let idValor1 = [0,0];
        let idValor2 = [0,0];
        let idValor3 = [0,0];
        let idValor4 = [0,0];

        function sumaTotal(v1,v2)
        {
            var textoDelate = 'Entre $';
            var textoEnmedio = ' mil y $';
            var textoFinal = ' mil';

            if(v1 != v2)
            {
                var sumando   = document.getElementById('sumando');
                sumando.value = textoDelate + v1 + textoEnmedio + v2 + textoFinal;
            }
            else
            {
                if(v1 == 230 || v1 == 150 || v1 == 155 || v1 == 215 || v1 == 60 || v1 == 5 || v1 == 75 || v1 == 15 || v1 == 80 || v1 == 210 || v1 == 165 || v1 == 225 || v1 == 65 || v1 == 20)
                {
                    var sumando   = document.getElementById('sumando');
                    sumando.value = 'Menos de $' + v1 + ' mil';
                }
                else
                {
                    var sumando   = document.getElementById('sumando');
                    sumando.value = 'Más de $' + v2 + ' mil';
                }
            }
        }

        function irSumando(e,id)
        {
            var idVl1 = 0;
            var idVl2 = 0;

            var v1 = parseInt(e.dataset.valor1);
            var v2 = parseInt(e.dataset.valor2);

            switch (id) {
                case idArray[0]:
                    idValor1 = [v1,v2];
                    idVl1 = idValor1[0] + idValor2[0] + idValor3[0] + idValor4[0];
                    idVl2 = idValor1[1] + idValor2[1] + idValor3[1] + idValor4[1];
                    sumaTotal(idVl1,idVl2);
                    break;
                case idArray[1]:
                    idValor2 = [v1,v2];
                    idVl1 = idValor1[0] + idValor2[0] + idValor3[0] + idValor4[0];
                    idVl2 = idValor1[1] + idValor2[1] + idValor3[1] + idValor4[1];
                    sumaTotal(idVl1,idVl2);
                    break;
                case idArray[2]:
                    idValor3 = [v1,v2];
                    idVl1 = idValor1[0] + idValor2[0] + idValor3[0] + idValor4[0];
                    idVl2 = idValor1[1] + idValor2[1] + idValor3[1] + idValor4[1];
                    sumaTotal(idVl1,idVl2);
                    break;
                case idArray[3]:
                    idValor4 = [v1,v2];
                    idVl1 = idValor1[0] + idValor2[0] + idValor3[0] + idValor4[0];
                    idVl2 = idValor1[1] + idValor2[1] + idValor3[1] + idValor4[1];
                    sumaTotal(idVl1,idVl2);
                    break;
                default:
                    console.log('aun no hay valores');
            }
        }

        function todosLosSeleccionados(e,id)
        {
            
            for(var i = 0 ; i < e.length; i++)
            {
                var dentroDeLabel = e[i].childNodes;
                for(var j = 0; j < dentroDeLabel.length; j++ )
                {
                    if(j%2 == 1 && dentroDeLabel[j].checked)
                    {
                        irSumando(dentroDeLabel[j],id);
                    }
                }
            }
        }

