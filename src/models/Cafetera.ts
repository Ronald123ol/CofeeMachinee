export default class Cafetera
{
    private cantidadCafe: number

    constructor(cantidad: number)
    {
        this.cantidadCafe = cantidad
    }

    public setCantidadDeCafe(param1: number)
    {}
    public getCantidadCafe()
    {
        return this.cantidadCafe
    }
    public hasCafe(cantidadCafe: number)
    {
        return this.cantidadCafe >= cantidadCafe
    }
    public giveCafe(cantidadCafe: number)
    {
        this.cantidadCafe -= cantidadCafe
    }

}