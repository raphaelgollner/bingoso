console.log("Entrou");
function gerarVetorRandomico(inicio, fim, qt_elementos){
    var vetorGerado = [];
    if(qt_elementos > 0 && inicio < fim && (fim-inicio) > qt_elementos){
      for(let i = 0; i < qt_elementos;){
        numRandomico = Math.floor(Math.random()*(fim-inicio + 1) + inicio);
        if(vetorGerado.indexOf(numRandomico) == -1){
          vetorGerado.push(numRandomico);
          i++;
        }
      }
    }else{
      console.log('Parâmetros Inválidos');
      return;
    }
    return vetorGerado.sort(function(a,b) {return a-b});
   }
   var cabecalho = ['B', 'I', 'N', 'G', 'O'];
   var coluna_B = gerarVetorRandomico(1,15,5);
   var coluna_I = gerarVetorRandomico(16,30,5);
   var coluna_N = gerarVetorRandomico(31,45,5);
   coluna_N[2] = 'X';
   var coluna_G = gerarVetorRandomico(46,60,5);
   var coluna_O = gerarVetorRandomico(61,75,5);
   
   var tabelaCartela = document.getElementById('cartela');
   
   var tabela = document.createElement('table');
   
   var linhaCabecalho = document.createElement('tr');
   
   for(let i = 0; i < 5; i++){
     var letra = document.createElement('td');
     letra.innerHTML = cabecalho[i];
     linhaCabecalho.appendChild(letra);
   }
   
   tabela.appendChild(linhaCabecalho);
   
   for(let i = 0; i < 5; i++){
     var linha = document.createElement('tr');
     for(let j = 0; j < 5; j++){
       var dado = document.createElement('td');
       switch(j){
         case 0:
           dado.innerHTML = coluna_B[i];
           break;
         case 1:
           dado.innerHTML = coluna_I[i];
           break;
         case 2:
           dado.innerHTML = coluna_N[i];
           break;
         case 3: 
           dado.innerHTML = coluna_G[i];
           break;
         case 4:
           dado.innerHTML = coluna_O[i];
           break;
       }
       linha.appendChild(dado);
     }
     tabela.appendChild(linha);
   }
   
   tabelaCartela.appendChild(tabela);
   
   var tdsCartela = document.getElementsByTagName('td');
   
   var numsSorteados = [];
   
   var bingo = window.setInterval(sorteianum, 1000)
   
   function sorteianum(){
     
     var eValida = false;
   
     while(eValida == false){
       var num = Math.floor(Math.random()*75+1);
       if(numsSorteados.indexOf(num) == -1){
         numsSorteados.push(num);
         eValida = true;
       }
     }
   
     document.getElementById('numSorteado').innerHTML = num;

     for(let i = 0; i < tdsCartela.length; i++){
       if(num.toString() == tdsCartela[i].innerHTML){
         tdsCartela[i].setAttribute('class', 'sorteado');
       }
     }
     if(numsSorteados.length == 24){
       window.clearInterval();
       alert('BINGO!')
     }

   }
   function confereCartela(){ 
   }