"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vaso {
    constructor(cantidad, contenido) {
        this.cantidadVasos = cantidad;
        this.contenido = contenido;
    }
    setCantidadVasos(param1) {
        this.cantidadVasos = param1;
    }
    getCantidadVasos() {
        return this.cantidadVasos;
    }
    setContenido(param1) {
        this.contenido = param1;
    }
    getContenido() {
        return this.contenido;
    }
    hasVasos(cantidadVasos) {
        return this.cantidadVasos >= cantidadVasos;
    }
    giveVasos(cantidadVasos) {
        this.cantidadVasos -= cantidadVasos;
    }
}
exports.default = Vaso;
