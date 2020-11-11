var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");
	// console.log(form.altura.value);
	// console.log(form.peso.value);

	// Extraindo informações do paciente do form
	var paciente = obtemPacienteDoFormulario(form);

	var erros = validaPaciente(paciente);

	if (erros.length > 0) {
        exibeMensagensDeErro(erros);
		// var mensagemErro = document.querySelector("#mensagem-erro");
		// mensagemErro.textContent = erros;
		return;
	}

	adicionaPacienteNaTabela(paciente);

	form.reset();
	var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
	var pacienteTr = montaTr(paciente);
	//adicionando o paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
	//cria um objeto (paciente)
	var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
	return paciente;
	// var nome = form.nome.value;
	// var peso = form.peso.value;
	// var altura = form.altura.value;
	// var gordura = form.gordura.value;
}

function montaTr(paciente) {
	//cria a tr e a td do paciente
	var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

	// var nomeTd = document.createElement("td");
	// var pesoTd = document.createElement("td");
	// var alturaTd = document.createElement("td");
	// var gorduraTd = document.createElement("td");
	// var imcTd = document.createElement("td");

	// var nomeTd = montaTd(paciente.nome, "info-nome");
	// var pesoTd = montaTd(paciente.peso, "info-peso");
	// var alturaTd = montaTd(paciente.altura, "info-altura");
	// var gorduraTd = montaTd(paciente.gordura, "info-gordura");
	// var imcTd = montaTd(paciente.imc, "info-imc");

	// nomeTd.textContent = paciente.nome;
	// pesoTd.textContent = paciente.peso;
	// alturaTd.textContent = paciente.altura;
	// gorduraTd.textContent = paciente.gordura;
	// imcTd.textContent = paciente.imc;
	// imcTd.textContent = calculaImc(peso, altura);

	// pacienteTr.appendChild(nomeTd);
	// pacienteTr.appendChild(pesoTd);
	// pacienteTr.appendChild(alturaTd);
	// pacienteTr.appendChild(gorduraTd);
	// pacienteTr.appendChild(imcTd);
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

	// if(!validaPeso(paciente.peso)){
	// 	erros.push("O peso é inválido");
	// } ou ...
	if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

	// if(!validaAltura(paciente.altura)){
	// 	erros.push("A altura é inválido");
	// } ou...
	if (!validaAltura(paciente.altura)) {
	   erros.push("Altura é inválida");
   }

	if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

	if (paciente.peso.length == 0) {
	   erros.push("O peso não pode ser em branco");
   }

   if (paciente.altura.length == 0) {
	   erros.push("A altura não pode ser em branco");
   }

	return erros;
}

function exibeMensagensDeErro(erros) {
	var ul = document.querySelector("#mensagens-erro");
	// for (var i = 0; i < erros.length; i++) {
	// 	var erro = erros[i];
	// }

	ul.innerHTML = "";
	erros.forEach(function(erro) {
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});

}
