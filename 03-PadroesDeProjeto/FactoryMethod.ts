/*
Considere que: 
- os produtos devem implementar uma interface comum; 
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface; 
- todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type; 
- há dois tipos de computadores: pc e server;
- RAM e HD devem estar em GB; 
- CPU deve estar em GHz; 
- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar; 
- quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos. 

//Exemplos:
https://sbcode.net/typescript/factory/
https://refactoring.guru/design-patterns/factory-method
*/

interface Computador{
    ram: number
    hdd: number
    cpu: number
    type: string

    set setRam(ram:number)
    set setHdd(hdd:number)
    set setCpu(cpu:number)
    set setType(type:string)

    get getRam():number
    get getHdd():number
    get getCpu():number
    get getType():string

    toString():string
}

class PC implements Computador{
    ram: number
    hdd: number
    cpu: number
    type: string

    constructor(ram:number, hdd:number, cpu:number, type:string){
        this.ram = ram
        this.hdd = hdd
        this.cpu = cpu
        this.type = type.charAt(0).toLocaleUpperCase() + type.slice(1).toLocaleLowerCase()
    }

    set setRam(ram: number) {
        this.ram = ram
    }
    set setHdd(hdd: number) {
        this.hdd = hdd
    }
    set setCpu(cpu: number) {
        this.cpu = cpu
    }
    set setType(type: string) {
        this.type = type
    }
    get getRam(): number {
        return this.ram
    }
    get getHdd(): number {
        return this.hdd
    }
    get getCpu(): number {
        return this.cpu
    }
    get getType(): string {
        return this.type
    }
    
    toString(): string {
        return `
            Dados da maquina: 
            Ram: ${this.getRam}GB
            Hdd: ${this.getHdd}GB
            CPU: ${this.getCpu}GHz
            Tipo: ${this.getType} 
        `
    }

}

class Server implements Computador{
    ram: number
    hdd: number
    cpu: number
    type: string

    constructor(ram:number, hdd:number, cpu:number, type:string){
        this.ram = ram
        this.hdd = hdd
        this.cpu = cpu
        this.type = type.charAt(0).toLocaleUpperCase() + type.slice(1).toLocaleLowerCase()
    }

    set setRam(ram: number) {
        this.ram = ram
    }
    set setHdd(hdd: number) {
        this.hdd = hdd
    }
    set setCpu(cpu: number) {
        this.cpu = cpu
    }
    set setType(type: string) {
        this.type = type
    }
    get getRam(): number {
        return this.ram
    }
    get getHdd(): number {
        return this.hdd
    }
    get getCpu(): number {
        return this.cpu
    }
    get getType(): string {
        return this.type
    }

    toString(): string {
        return `
            Dados da maquina: 
            Ram: ${this.getRam}GB
            Hdd: ${this.getHdd}GB
            CPU: ${this.getCpu}GHz
            Tipo: ${this.getType} 
        `
    }
    
}

class Fabrica{


    static computador(ram:number, hdd:number, cpu:number, type:string): Computador{
        if (type.toLocaleLowerCase() === 'pc')
            return new PC(ram, hdd, cpu, type.toLocaleLowerCase())
        else if (type.toLocaleLowerCase() === 'server')
            return new Server(ram, hdd, cpu, type.toLocaleLowerCase())
    }
}


let pc:Computador = Fabrica.computador(16, 512, 2.5, 'pC')
let servidor:Computador = Fabrica.computador(64, 2048, 3, 'sErVEr')

console.log(pc.toString())
console.log(servidor.toString())