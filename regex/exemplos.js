// 1. Qualquer caractere (exceto quebra de linha)
console.log("Olá!".match(/./g)); // ['O', 'l', 'á', '!']

// 2. Dígito de 0 a 9
console.log("Casa 123".match(/\d/g)); // ['1', '2', '3']

// 3. Qualquer caractere que não seja um dígito
console.log("Apt 101".match(/\D/g)); // ['A', 'p', 't', ' ']

// 4. Espaço em branco
console.log("João Silva".match(/\s/)); // [' ']

// 5. Qualquer caractere que não seja espaço
console.log("Olá mundo".match(/\S/g)); // ['O', 'l', 'á', 'm', 'u', 'n', 'd', 'o']

// 6. Caractere alfanumérico
console.log("abc_123!".match(/\w/g)); // ['a', 'b', 'c', '_', '1', '2', '3']

// 7. Não alfanumérico
console.log("abc_123!".match(/\W/g)); // ['!']

// 8. Início da string
console.log(/Olá^/.test("Olá mundo")); // true

// 9. Fim da string
console.log(/mundo$/.test("Olá mundo")); // true

// 10. Um ou mais repetições
console.log("aoaah!".match(/a+/g)); // ['aaaa']

// 11. Zero ou mais repetições
console.log("b".match(/a*/)); // [''] (a zero vezes)

// 12. Zero ou um (opcional)
console.log("correio".match(/correio?/)); // ['correio']
console.log("correia".match(/correio?/));  // ['correi']

// 13. Intervalo de caracteres
console.log("letra".match(/[aeiou]/g)); // ['e', 'a']

// 14. Exceto vogais
console.log("letra".match(/[^aeiou]/g)); // ['l', 't', 'r']

// 15. Alternativa (ou)
console.log("Quero uma banana".match(/maçã|banana|laranja/)); // ['banana']

// 16. Agrupamento com repetição
console.log("ababab".match(/(ab)+/)); // ['ababab']

// 17. Três dígitos
console.log("Código: 453".match(/\d{3}/)); // ['456']

// 18. De 2 a 5 letras
console.log("Oi Lucas!".match(/[a-zA-Z]{2,5}/g)); // ['Lucas']

// 19. Palavra inteira com bordas
console.log("não é palavra-chave, só palavra.".match(/\bpalavra\b/)); // ['palavra']

// 20. Lookahead positivo (tem que ter algo depois)
console.log("senha123".match(/senha(?=\d+)/)); // ['senha']

// 21. Lookbehind positivo (tem que ter algo antes) [requer navegador moderno]
console.log("Total: R$199,90".match(/(?<=R\$)\d+/)); // ['199']
