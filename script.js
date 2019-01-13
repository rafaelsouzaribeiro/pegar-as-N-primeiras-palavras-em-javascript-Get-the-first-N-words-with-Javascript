//Olá, hoje vamos ver como pegar várias palavras de uma striing, temos duas maneiras. Essa com expressão regular:
 var str1 = "palavra1 palavra2 palavra3";
// Pegamos duas palavras da string descricao com expressão regular
 var str2 = str1.replace(/(([^\s]+\s\s*){2})(.*)/,"$1…");
 console.log(">>"+str2);


 //Outra maneira sem expressão:
 const descricao = "Palavra1 Palavra2 Palavra3 Palavra4";
// Pegamos duas palavras da string descricao
const resultado = descricao.split(' ').slice(0,2).join(' '); 
 console.log(resultado);



