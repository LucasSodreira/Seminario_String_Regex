const texto = `
Nome: Fulano da Silva
Email: emaildefulano@gmail.com
Telefone: (00) 91234-5678
CPF: 122.456.789-00
`;

const nome = texto.match(/Nome:\s(.+)/)[1];
const email = texto.match(/Email:\s(.+)/)[1];
const telefone = texto.match(/Telefone:\s(.+)/)[1];
const cpf = texto.match(/CPF:\s(.+)/)[1];

console.log(nome)
console.log(email)
console.log(telefone)
console.log(cpf)
 