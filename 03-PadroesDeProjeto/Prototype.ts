/*
Crie uma fábrica de veículos utilizando o padrão Prototype com base no exemplo apresentado no Hipertexto 2. Os requisitos do projeto devem ser:
- implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent; 
- o construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros; 
- crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas; 
- desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array; 
- na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos; 
- no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos. 

Exemplos:
https://refactoring.guru/design-patterns/prototype
https://sbcode.net/typescript/prototype/

Exemplos de como fazer o retorno ser uma classe atraves de String
https://stackoverflow.com/questions/67790777/typescript-how-to-retrieve-class-name
https://www.geeksforgeeks.org/how-to-cast-a-json-object-inside-of-typescript-class/
https://stackoverflow.com/questions/20985117/create-a-new-class-using-a-string-name-in-typescript
https://stackoverflow.com/questions/28150967/typescript-cloning-object/28152032#28152032


*/

abstract class Veiculo {
    modelo: string
    marca: string
    cor: string
    numeroRodas: number

    constructor(modelo: string, marca: string, cor: string, numeroRodas: number) {
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.numeroRodas = numeroRodas
    }

    represent() {
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Marca: ${this.marca}`)
        console.log(`Cor: ${this.cor}`)
        console.log(`Numero de Rodas: ${this.numeroRodas}`)
    }

    clone(): any {
        //é como se fosse "Object.assign(new MOTO(), this)"
        return Object.assign(eval(`new ${(this as any).constructor.name}()`), this) // -> MELHOR MODO. Cria objetos independentes e ESPECIFICA o tipo de cada um, assim pode chamar seus metodos
        // return Object.assign({}, this) // -> Cria objetos GENERICOS INDEPENDENTES. Alterar a informação de um não modifica o do outro, porém esses objetos nao tem metodos
        // return Object.assign(this) // shallow copy -> Cria objetos "interligados". Ao mudar o valor de um deles, muda o dos outros. Não possui os metodos da classe ('represent' nao funciona)
        //  return JSON.stringify(this); //deep copy -> Retorna um JSON com os dados do objeto. Util se quiser criar um novo objeto com esses dados
        //return Object.create(this) //-> parecido com o assign. Cria de fato um novo objeto, mas esse novo objeto tem os atributos do "pai". Se mudar os dados do atributo Pai, os clones deles sao mudados tambem

        //OBS:
        // (this as any).constructor.name} -> Pega o NOME DA CLASSE do objeto, assim usando EVAL pode criar uma nova classe usando esses nome obtido. o THIS envia os dados para o construtor. Ele cria um OBJETO NOVO com os dados do THIS
    }
}

class Carro extends Veiculo {
    numeroPortas: number

    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, numeroPortas: number) {
        super(modelo, marca, cor, numeroRodas)
        this.numeroPortas = numeroPortas
    }

    represent() {
        console.log("Tipo Veiculo: Carro")
        super.represent()
        console.log(`Numero de Portas: ${this.numeroPortas}`)
    }

}

class Moto extends Veiculo {
    cilindradas: number

    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, cilindradas: number) {
        super(modelo, marca, cor, numeroRodas)
        this.cilindradas = cilindradas
    }

    represent() {
        console.log("Tipo Veiculo: Moto")
        super.represent()
        console.log(`Cilindradas: ${this.cilindradas}`)
    }
}


class Aplicacao {

    // constructor(){
    //     this.lista()
    // }

    static lista(): Array<Veiculo> {
        let lista: Array<Veiculo> = []

        let carro: Carro = new Carro('ModeloCarro1', "MarcaCarro1", "CorCarro1", 4, 2)
        let moto: Moto = new Moto('ModeloMoto1', "MarcaMoto1", "CorMoto1", 2, 150)

        let carro2: Carro = carro.clone()
        let moto2: Moto = moto.clone()

        let carro3: Carro = carro.clone()
        carro3.numeroPortas = 4             //mudando alguns dados
        carro3.modelo = "ModeloCarro3"      //mudando alguns dados

        let moto3: Moto = moto.clone()
        moto3.cilindradas = 300             //mudando alguns dados
        moto3.marca = "MarcaMoto3"          //mudando alguns dados

        moto2.cor = "nenhuma"               //mudando alguns dados
        moto.modelo = "mode"                //mudando alguns dados

        lista.push(carro, carro2, carro3, moto, moto2, moto3)

        return lista
    }

}

let listaVeiculos = Aplicacao.lista()

//console.log(listaVeiculos)

for (let i = 0; i < listaVeiculos.length; i++) {
    //console.log(listaVeiculos[i])
    //console.log(listaVeiculos[i].constructor.name)
    listaVeiculos[i].represent()
    console.log("-----")
}