"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cafetera {
    constructor(cantidad) {
        this.cantidadCafe = cantidad;
    }
    setCantidadDeCafe(param1) { }
    getCantidadCafe() {
        return this.cantidadCafe;
    }
    hasCafe(cantidadCafe) {
        return this.cantidadCafe >= cantidadCafe;
    }
    giveCafe(cantidadCafe) {
        this.cantidadCafe -= cantidadCafe;
    }
}
exports.default = Cafetera;
