function saudacao():void{
    console.log("Olá, mundo")
}
saudacao()

function dobro(n1:number): void{
    console.log(`O dobro de ${n1} é ${2*n1}`)
}
dobro(5)

function mostrarNumeros(inicio:number, fim:number): void{
    for(let i = inicio; i <= fim; i++)
        console.log(i)
}
mostrarNumeros(5,15)

function verificarPar(n:number):void {
    if(n % 2 == 0)
        console.log(`${n} é PAR`)
    else
        console.log(`${n} é IMPAR`)
}
verificarPar(9)

function imprimirLista(lista: Array<any>):void{
    for(let i = 0; i < lista.length; i++)
        console.log(`${i+1} elemento: ${lista[i]}`)
}
imprimirLista([5, "casa", true, "alguem", 11])