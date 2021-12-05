export default class Vaso 
{
    private cantidadVasos: number
    private contenido: number

    constructor(cantidad: number, contenido: number)
    {
        this.cantidadVasos = cantidad
        this.contenido = contenido
    }

    public setCantidadVasos(param1: number)
    {
        this.cantidadVasos = param1
    }
    public getCantidadVasos()
    {
        return this.cantidadVasos
    }
    public setContenido(param1: number)
    {
        this.contenido = param1
    }
    public getContenido()
    {
        return this.contenido
    }
    public hasVasos(cantidadVasos: number)
    {
        return this.cantidadVasos >= cantidadVasos
    }
    public giveVasos(cantidadVasos: number)
    {
        this.cantidadVasos -= cantidadVasos
    }
}