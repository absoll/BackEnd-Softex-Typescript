/*
Sites exemplificando:
https://refactoring.guru/design-patterns/singleton/typescript/example
https://www.typescriptlang.org/docs/handbook/2/classes.html

*/


class InstanciaUnica{
    private static instance: InstanciaUnica
    cor:string

    private constructor(){
    }

    static getInstance(): InstanciaUnica{
        if(InstanciaUnica.instance){
            return InstanciaUnica.instance
        }

        InstanciaUnica.instance = new InstanciaUnica()
        return InstanciaUnica.instance
    }

    set setCor(cor:string){
        this.cor = cor
    }

    get getCor():string{
        return this.cor
    }
}

let unico:InstanciaUnica = InstanciaUnica.getInstance()
unico.setCor = "Vermelho"

let unico2:InstanciaUnica = InstanciaUnica.getInstance()
console.log(unico2.getCor)

if(unico === unico2)
    console.log("Sao totalmente iguais")
else
    console.log("Instancias diferentes")

