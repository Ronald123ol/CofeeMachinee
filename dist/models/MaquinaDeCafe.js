"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Azuquero_1 = __importDefault(require("./Azuquero"));
const Cafetera_1 = __importDefault(require("./Cafetera"));
const Vaso_1 = __importDefault(require("./Vaso"));
class MaquinaDeCafe {
    constructor() {
        this.cafe = new Cafetera_1.default(0);
        this.vasosPequeno = new Vaso_1.default(0, 0);
        this.vasosMediano = new Vaso_1.default(0, 0);
        this.vasosGrande = new Vaso_1.default(0, 0);
        this.azucar = new Azuquero_1.default(0);
    }
    getTipoDeVaso(tipoDeVaso) {
        tipoDeVaso = tipoDeVaso.toLocaleLowerCase();
        if (tipoDeVaso === "mediano")
            return this.vasosMediano;
        if (tipoDeVaso === "grande")
            return this.vasosGrande;
        return this.vasosPequeno;
    }
    getVasoDeCafe(tipoDeVaso, cantidadDeVasos, cantidadDeAzucar) {
        // Verificando si hay disponibilidad para preparar el cafe
        if (!tipoDeVaso.hasVasos(cantidadDeVasos))
            return "No hay Vasos";
        if (!this.cafe.hasCafe(tipoDeVaso.getContenido()))
            return "No hay Cafe";
        if (!this.azucar.hasAzucar(cantidadDeAzucar))
            return "No hay Azucar";
        // Preparando el cafe
        if (this.vasosPequeno.getContenido() === tipoDeVaso.getContenido())
            this.vasosPequeno.giveVasos(cantidadDeVasos);
        else if (this.vasosMediano.getContenido() === tipoDeVaso.getContenido())
            this.vasosMediano.giveVasos(cantidadDeVasos);
        else if (this.vasosGrande.getContenido() === tipoDeVaso.getContenido())
            this.vasosGrande.giveVasos(cantidadDeVasos);
        else
            return "Error al Obtener Vaso";
        this.azucar.giveAzucar(cantidadDeAzucar);
        this.cafe.giveCafe(tipoDeVaso.getContenido());
        return "Felicitaciones";
    }
    setVasosPequeno(vasosPequeno) {
        this.vasosPequeno = vasosPequeno;
    }
    getVasosPequeno() {
        return this.vasosPequeno;
    }
    setCafetera(cafetera) {
        this.cafe = cafetera;
    }
    setVasosMediano(vasoMediano) {
        this.vasosMediano = vasoMediano;
    }
    setVasosGrande(vasosGrande) {
        this.vasosGrande = vasosGrande;
    }
    setAzucarero(azucarero) {
        this.azucar = azucarero;
    }
    getAzucarero() {
        return this.azucar;
    }
    getCafetera() {
        return this.cafe;
    }
}
exports.default = MaquinaDeCafe;
