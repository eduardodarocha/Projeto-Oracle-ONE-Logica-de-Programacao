// console.log(document);
// var titulo = document.querySelector("h1");   outra opção é buscar pela classe ou id
var titulo = document.querySelector(".titulo");
// console.log(titulo, "variável titulo");
// console.log(titulo.textContent, "-> conteúdo em texto da variável titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if (!pesoEhValido) {
		console.log("Peso inválido");
		pesoEhValido = false;
		tdImc.textContent = "Peso Inválido";
		// paciente.style.backgroundColor = "lightcoral";
		paciente.classList.add("paciente-invalido")
	};

	if (!alturaEhValida) {
		console.log("Altura inválida");
		alturaEhValida = false;
		tdImc.textContent = "Altura Inválida";
		// paciente.style.backgroundColor = "orange";
		paciente.classList.add("paciente-invalido")
	};

	if (alturaEhValida && pesoEhValido) {
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}
};

function validaPeso(peso) {
	if(peso >=0 && peso <= 1000){
		return true;
	}else{
		return false;
	}
};

function validaAltura(altura) {
	if(altura >=0 && altura < 3.0){
		return true;
	}else {
		return false;
	}
};


function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
};

// titulo.addEventListener("click", mostraMensagem );

// function mostraMensagem() {
//   console.log("Olá eu fui clicado!");
//   alert("Olá eu fui clicado!");
// }

// outra de forma de chamar a função (função anônima)

// titulo.addEventListener("click", function(){
//     console.log("Olá eu fui clicado!");
//     alert("Olá eu fui clickado!");
// } );

// console.log(paciente);
// console.log(tdPeso);
// console.log(peso);
// console.log(altura);
// console.log(imc);
