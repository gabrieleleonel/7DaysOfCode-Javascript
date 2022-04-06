var nome = prompt("Qual o seu nome?", nome);
var idade = prompt("Quantos anos você tem?", idade);
var linguagem = prompt("Qual a linguagem de programação que você está estudando?", linguagem);

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

var gosta = prompt("Você gosta de estudar " + linguagem+ "? Responda com o número 1 para SIM ou 2 para NÃO",gosta);

if(gosta == 1 ? alert("Muito bom! Continue estudando e você terá muito sucesso."):alert("Ahh que pena... Já tentou aprender outras linguagens?"));