let number:number = 10
let nome:string = "abcd"
let boleano:boolean = true

let array:Array<number> = [5]
let array2:Array<Array<number | boolean> | string> = [[5], [2, 3, 4, false], "algum nome"]
let array3:Array<Array<number | boolean> | Array<string>> = [[5], [2, 3, 4, false], ['algum nome']]
let array4:Array<[string, number]> = [["casa", 10]]

console.log(array4)

let objeto:Object = new Number(5)
//objeto.constructor(5) //- nao funciona


console.log(objeto.valueOf())

let tupla:[string, number] = ['tarde', 14]

console.log(tupla)


let algumaCoisa: unknown

algumaCoisa = 10
console.log(algumaCoisa)
algumaCoisa = "string"
console.log(algumaCoisa)
// Use UNKNOWN em vez de ANY!!!

// The key difference between unknown and any is that any allows you to perform any operation on a value without any type checking,
// whereas unknown requires you to perform type checking before performing any operations on the value.

//https://marketsplash.com/tutorials/typescript/typescript-unknown-vs-any/#:~:text=The%20key%20difference%20between%20unknown,any%20operations%20on%20the%20value.&text=In%20the%20example%20above%2C%20we,foo%20variable%20of%20type%20any%20.
//https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#:~:text=unknown%20is%20the%20type%2Dsafe,to%20a%20more%20specific%20type.


enum enumeracao {
    sucesso,
    falha,
    teste
}

enum enumeracaoComValor {
    sucesso = 'suss',
    falha = 'fal',
    teste = 10
}

console.log(enumeracao.sucesso)
console.log(enumeracaoComValor.teste)

// enum -> https://www.typescriptlang.org/docs/handbook/enums.html