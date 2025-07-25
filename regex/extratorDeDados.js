const texto = `
Nome: Fulano da Silva
Email: emaildefulano@gmail.com
Telefone: (00) 91234-5678
CPF: 123.456.789-00
`;

const nome = texto.match(/Nome:\s(.+)/)[1];

const email = texto.match(/Email:\s(.+)/)[1];
const emailValido = /^[\w.-]+@[\w.-]+\.\w+$/.test(email);

const telefone = texto.match(/Telefone:\s(.+)/)[1];
const telefoneLimpo = telefone.replace(/\D/g, '');

const cpf = texto.match(/CPF:\s(.+)/)[1];
const cpfLimpo = cpf.replace(/\D/g, '');

console.log("Dados Extraídos:");
console.log(`Nome: ${nome}`);
console.log(`Email: ${email} (${emailValido ? "Válido" : "Inválido"})`);
console.log(`Telefone (limpo): ${telefoneLimpo}`);
console.log(`CPF (limpo): ${cpfLimpo}`);