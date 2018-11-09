	var cart = [];
	var sort = [];
	var numt = 0;
	var veri = 0;
	var totMarc = 0;

	do{
		numero = Math.floor(Math.random()*75)+1;
		if(!cart.includes(numero)){
			cart.push(numero);
		}
	}while(cart.length != 24);

	cart.sort();
	console.log(cart);

	setInterval(function(){
		veri = Math.floor(Math.random()*75)+1;
		if(!sort.includes(veri)){
			sort.push(veri);
			console.log(veri);
			window.alert(">>> NUMERO SORTEADO: "+veri +" <<<");
			if(cart.includes(veri)){
				totMarc++;
			}
		}
		if(totMarc == 24){
			window.alert(">>> BINGO! <<<");
			window.alert(">>> PEDRAS ANTES DA VITÓRIA: "+sort.length() +" <<<");
		} else {
			window.alert(">>> FALTAM "+(24-totMarc)+" NUMEROS PARA UM BINGO! <<<");
		}
	}, 1000);