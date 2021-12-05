import Azucarero from "./Azuquero";
import Cafetera from "./Cafetera";
import Vaso from "./Vaso";

export default class MaquinaDeCafe
{
    private cafe: Cafetera
    public vasosPequeno: Vaso
    public vasosMediano: Vaso
    public vasosGrande: Vaso
    private azucar: Azucarero

    constructor()
    {
        this.cafe = new Cafetera(0)
        this.vasosPequeno = new Vaso(0,0)
        this.vasosMediano = new Vaso(0,0)
        this.vasosGrande = new Vaso(0,0)
        this.azucar = new Azucarero(0)
    }

    public getTipoDeVaso(tipoDeVaso: string): Vaso
    {
        tipoDeVaso = tipoDeVaso.toLocaleLowerCase()

        if(tipoDeVaso === "mediano")
            return this.vasosMediano
        if(tipoDeVaso === "grande")
            return this.vasosGrande

        return this.vasosPequeno
    }

    public getVasoDeCafe(tipoDeVaso: Vaso, cantidadDeVasos: number, cantidadDeAzucar: number): string
    {
        
        if(!tipoDeVaso.hasVasos(cantidadDeVasos))
        return "No hay Vasos"
        if(!this.cafe.hasCafe(tipoDeVaso.getContenido()))
            return "No hay Cafe"
        if(!this.azucar.hasAzucar(cantidadDeAzucar))
            return "No hay Azucar"

       
        if(this.vasosPequeno.getContenido() === tipoDeVaso.getContenido())
            this.vasosPequeno.giveVasos(cantidadDeVasos)
        else if(this.vasosMediano.getContenido() === tipoDeVaso.getContenido())
            this.vasosMediano.giveVasos(cantidadDeVasos)
        else if(this.vasosGrande.getContenido() === tipoDeVaso.getContenido())
            this.vasosGrande.giveVasos(cantidadDeVasos)
        else return "Error al Obtener Vaso"
        this.azucar.giveAzucar(cantidadDeAzucar)
        this.cafe.giveCafe(tipoDeVaso.getContenido())
        return "Felicitaciones"
    }

    public setVasosPequeno(vasosPequeno: Vaso)
    {
        this.vasosPequeno = vasosPequeno
    }
    public getVasosPequeno(): Vaso
    {
        return this.vasosPequeno
    }
    public setCafetera(cafetera: Cafetera)
    {
        this.cafe = cafetera
    }
    public setVasosMediano(vasoMediano: Vaso)
    {
        this.vasosMediano = vasoMediano
    }
    public setVasosGrande(vasosGrande: Vaso)
    {
        this.vasosGrande = vasosGrande
    }
    public setAzucarero(azucarero: Azucarero)
    {
        this.azucar = azucarero
    }
    public getAzucarero(): Azucarero
    {
        return this.azucar
    }
    public getCafetera(): Cafetera
    {
        return this.cafe
    }
}