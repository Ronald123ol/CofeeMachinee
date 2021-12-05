export default class Azucarero
{
    private cantidadDeAzucar: number

    constructor(cantidad: number)
    {
        this.cantidadDeAzucar = cantidad
    }

    public getCantidadAzucar()
    {
        return this.cantidadDeAzucar
    }

    public setCantidadDeAzucar(param1: number)
    {}
    
    public hasAzucar(cantidadDeAzucar: number)
    {
        return this.cantidadDeAzucar >= cantidadDeAzucar
    }
    public giveAzucar(cantidadDeAzucar: number)
    {
        this.cantidadDeAzucar -= cantidadDeAzucar
    }
}