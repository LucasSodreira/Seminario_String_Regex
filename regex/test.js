const email = "emaildefulano@email.com";

const regexEmail = /^[\w.-]+@[\w.-]+\.\w+$/;
const resultado = regexEmail.test(email);

console.log(`O e-mail é válido? ${resultado}!!`); 