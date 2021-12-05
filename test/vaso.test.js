"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vaso_1 = __importDefault(require("../src/models/Vaso"));
describe("Test Vaso", () => {
    test("deberiaDevolverVerdaderoSiExistenVasos", () => {
        const vasoPequenos = new Vaso_1.default(2, 10);
        const resultado = vasoPequenos.hasVasos(1);
        expect(resultado).toBe(true);
    });
    test("deberiaDevolverFalsoSiNoExistenVasos", () => {
        const vasoPequenos = new Vaso_1.default(1, 10);
        const resultado = vasoPequenos.hasVasos(2);
        expect(resultado).toBe(false);
    });
    test("deberiaRestarCantidadesDeVaso", () => {
        const vasoPequenos = new Vaso_1.default(5, 10);
        vasoPequenos.giveVasos(1);
        expect(vasoPequenos.getCantidadVasos()).toBe(4);
    });
});
