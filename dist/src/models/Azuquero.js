"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Azucarero {
    constructor(cantidad) {
        this.cantidadDeAzucar = cantidad;
    }
    setCantidadDeAzucar(param1) { }
    getCantidadAzucar() {
        return this.cantidadDeAzucar;
    }
    hasAzucar(cantidadDeAzucar) {
        return this.cantidadDeAzucar >= cantidadDeAzucar;
    }
    giveAzucar(cantidadDeAzucar) {
        this.cantidadDeAzucar -= cantidadDeAzucar;
    }
}
exports.default = Azucarero;
