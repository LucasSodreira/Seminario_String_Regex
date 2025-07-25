const texto = `
Nome: Fulano da Silva
Email: emaildefulano@gmail.com
Telefone: (00) 91234-5678
CPF: 123.456.789-00
`;

const cpf = texto.match(/CPF:\s(.+)/)[0];
const cpfLimpo = cpf.replace(/\D/g, '');
console.log(`CPF limpo: ${cpfLimpo}`); 