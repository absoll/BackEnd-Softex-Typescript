interface FiguraGeometrica{
    base?: number
    altura?: number
    raio?: number

    area(): number

    perimetro():number

    valido(): boolean
}

class Quadrado implements FiguraGeometrica{
    base:number
    #lado: Array<number>

    constructor(lado:number){
        this.#lado = [lado]
        let resultado:boolean = this.valido()
        
        if (resultado == true)
            this.base = lado
        else
            this.base = 0
    }

    area():number{
        return this.base * this.base
    }

    perimetro(): number {
        return 4 * this.base
    }

    valido(): boolean{
        if (this.#lado[0] >= 0)
            return true
         else
            return false
    }
}

class Retangulo implements FiguraGeometrica{
    base: number
    altura: number
    #lado: Array<number>

    constructor(lado1:number, lado2:number){
        this.#lado = [lado1, lado2]
        let resultado:boolean = this.valido()

        if (resultado == true){
            this.base = lado1
            this.altura = lado2
        }
        else{
            this.base = 0
            this.altura = 0
        }
        
    }

    area():number{
        return this.base * this.altura
    }

    perimetro(): number {
        return 2 * (this.base + this.altura)
    }

    valido(): boolean {
        if (this.#lado[0] <= 0 || this.#lado[1] <= 0)
            return false
        else{
            if(this.#lado[0] != this.#lado[1])
                return true
            else
                return false
        }
    }
}

class Circulo implements FiguraGeometrica{
    raio: number
    #lado: Array<number>

    constructor(raio:number){
        this.#lado = [raio]
        let resultado:boolean = this.valido()

        if(resultado == true)
            this.raio = raio
        else
            this.raio = 0
    }

    area():number{
        return 3.14 * this.raio * this.raio
    }

    perimetro(): number {
        return 2 * 3.14 * this.raio
    }

    valido(): boolean{
        if (this.#lado[0] <= 0)
            return false
        else
            return true
    }
}

class Triangulo implements FiguraGeometrica{
    base: number
    altura: number
    #lado: Array<number>

    constructor(lado1:number, lado2:number, lado3:number){
        this.#lado = [lado1, lado2, lado3]
        let resultado:boolean = this.valido()

        if(resultado == true){
            if(lado1 === lado2 && lado1 === lado3){ //triangulo equilatero l1 = l2 = l3 - https://br.neurochispas.com/geometria/altura-de-um-triangulo-equilatero-formulas-e-exercicios/
                this.base = lado1
                this.altura = (Math.sqrt(3)*lado1) / 2 
            }
            else if(lado1 === lado2){ //triangulo isosceles l1 = l2 -https://br.neurochispas.com/geometria/altura-de-um-triangulo-isosceles-formulas-e-exercicios/#:~:text=A%20altura%20de%20um%20tri%C3%A2ngulo,de%20um%20dos%20lados%20congruentes.
                this.base = lado3
                this.altura = Math.sqrt((lado1*lado1) - ((lado3*lado3) / 4))
            }
            else if(lado1 === lado3){ //triangulo isosceles l1 = l3
                this.base = lado2
                this.altura = Math.sqrt((lado1*lado1) - ((lado2*lado2) / 4))
            }
            else if(lado2 === lado3){ //triangulo isosceles l2 = l3
                this.base = lado1
                this.altura = Math.sqrt((lado2*lado2) - ((lado1*lado1) / 4))
            }
            else{ //triangulo escaleno - https://br.neurochispas.com/geometria/altura-de-um-triangulo-escaleno-formulas-e-exercicios/
                this.base = lado1
                let semiperimetro:number = (lado1 + lado2 + lado3) / 2 
                this.altura = (2/lado1) *Math.sqrt(semiperimetro* (semiperimetro - lado1)* (semiperimetro - lado2)*(semiperimetro -lado3))
                console.log(this.altura)
            }
        }
        else{
            this.base = 0
            this.altura = 0
        }

    }

    area():number{
        return parseFloat(((this.base * this.altura) / 2).toFixed(3))
    }

    perimetro(): number {
        return this.#lado[0] + this.#lado[1] + this.#lado[2]
    }

    valido():boolean{
        if (this.#lado[0] <= 0 || this.#lado[1] <= 0 || this.#lado[2] <= 0)
            return false
        else{
            if((this.#lado[0] + this.#lado[1]) > this.#lado[2] &&  
               (this.#lado[0] + this.#lado[2]) > this.#lado[1] &&
               (this.#lado[1] + this.#lado[2]) > this.#lado[0])
                return true
            else
                return false
            
        }
    }
}


let teste:number = 5
let teste2:number = 10


console.log(new Triangulo(12, 14, 16).area())


