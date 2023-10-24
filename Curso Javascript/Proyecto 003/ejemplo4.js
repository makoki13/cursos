class Vehiculo {
    constructor(ruedas, plazas) {
        this.ruedas = ruedas
        this.plazas = plazas
        this.precio = 0
    }

    setPrecio(precio) {
        this.precio = precio
    }
}
class Motocicleta extends Vehiculo{
    constructor(ruedas, plazas) {
        super(ruedas,plazas)                        
    }
    setCilindrada(cilindrada) {
        this.cilindrada = cilindrada
    }
}
class Camion extends Vehiculo{
    constructor(ruedas, plazas) {
        super(ruedas,plazas)
    }
    setTara(tara) {
        this.tara = tara
    }
}

let miMotocicleta = new Motocicleta(2, 1)
miMotocicleta.setPrecio(5000)
miMotocicleta.setCilindrada(125)

console.log("Ruedas: ", miMotocicleta.ruedas)
console.log("Plazas: ",miMotocicleta.plazas)
console.log("Precio: ",miMotocicleta.precio)
console.log("Cilindrada: ",miMotocicleta.cilindrada)

let miCamion = new Camion(4, 3)
miCamion.setPrecio(50000)
miCamion.setTara(2000)

console.log("Ruedas: ", miCamion.ruedas)
console.log("Plazas: ",miCamion.plazas)
console.log("Precio: ",miCamion.precio)
console.log("Cilindrada: ",miCamion.tara)
