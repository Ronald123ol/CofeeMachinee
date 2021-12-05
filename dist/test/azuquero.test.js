"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Azuquero_1 = __importDefault(require("../src/models/Azuquero"));
describe("Test Azuquero", () => {
    let azuquero;
    beforeAll(() => {
        azuquero = new Azuquero_1.default(10);
    });
    test("deberiaDevolverVerdaderoSiHaySuficienteAzucarEnElAzuquero", () => {
        expect(azuquero.hasAzucar(5)).toBe(true);
        expect(azuquero.hasAzucar(10)).toBe(true);
    });
    test("deberiaDevolverFalsoPorqueNoHaySuficienteAzucarEnElAzuquero", () => {
        expect(azuquero.hasAzucar(15)).toBe(false);
    });
    test("deberiaRestarAzucarAlAzuquero", () => {
        azuquero.giveAzucar(5);
        expect(azuquero.getCantidadAzucar()).toBe(5);
        azuquero.giveAzucar(2);
        expect(azuquero.getCantidadAzucar()).toBe(3);
    });
});
