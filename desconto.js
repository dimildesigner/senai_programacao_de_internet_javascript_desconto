// 3-Fernanda foi a uma loja e comprou produtos no valor de R$120. 
// A loja oferece um desconto de 10% para compras acima de R$100.
// Crie um programa que calcule o valor final da compra de Fernanda,
// aplicando o desconto se aplicável.

console.log("........... Calculadora de Desconto ...........");

const prompt = require(`prompt-sync`)()

let valorCompra = parseFloat(prompt('Digite o valor da compra: '))
let valorFinal;

if (valorCompra > 100) {
  valorFinal = valorCompra * 0.9;
  console.log(`Você recebeu um desconto. O valor final é R$${valorFinal}.`);

} else {
  console.log(`Não houve desconto. O valor da compra é R$${valorCompra}.`);
}