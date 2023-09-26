var number = 10;
var nome = "abcd";
var boleano = true;
var array = [5];
var array2 = [[5], [2, 3, 4, false], "algum nome"];
var array3 = [[5], [2, 3, 4, false], ['algum nome']];
var array4 = [["casa", 10]];
console.log(array4);
var objeto = new Number(5);
//objeto.constructor(5) //- nao funciona
console.log(objeto.valueOf());
var tupla = ['tarde', 14];
console.log(tupla);
var algumaCoisa;
algumaCoisa = 10;
console.log(algumaCoisa);
algumaCoisa = "string";
console.log(algumaCoisa);
// Use UNKNOWN em vez de ANY!!!
// The key difference between unknown and any is that any allows you to perform any operation on a value without any type checking,
// whereas unknown requires you to perform type checking before performing any operations on the value.
//https://marketsplash.com/tutorials/typescript/typescript-unknown-vs-any/#:~:text=The%20key%20difference%20between%20unknown,any%20operations%20on%20the%20value.&text=In%20the%20example%20above%2C%20we,foo%20variable%20of%20type%20any%20.
//https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#:~:text=unknown%20is%20the%20type%2Dsafe,to%20a%20more%20specific%20type.
var enumeracao;
(function (enumeracao) {
    enumeracao[enumeracao["sucesso"] = 0] = "sucesso";
    enumeracao[enumeracao["falha"] = 1] = "falha";
    enumeracao[enumeracao["teste"] = 2] = "teste";
})(enumeracao || (enumeracao = {}));
var enumeracaoComValor;
(function (enumeracaoComValor) {
    enumeracaoComValor["sucesso"] = "suss";
    enumeracaoComValor["falha"] = "fal";
    enumeracaoComValor["teste"] = "tes";
})(enumeracaoComValor || (enumeracaoComValor = {}));
console.log(enumeracao.sucesso);
console.log(enumeracaoComValor.falha);
// enum -> https://www.typescriptlang.org/docs/handbook/enums.html
