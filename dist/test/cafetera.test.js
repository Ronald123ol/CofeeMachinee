"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cafetera_1 = __importDefault(require("../src/models/Cafetera"));
describe("Test Cafeteria", () => {
    it("deberiaDevolverVerdaderoSiExisteCafe", () => {
        const cafetera = new Cafetera_1.default(10);
        const resultado = cafetera.hasCafe(5);
        expect(resultado).toBe(true);
    });
    it("deberiaDevolverFalsoSiNoExisteCafe", () => {
        const cafetera = new Cafetera_1.default(10);
        const resultado = cafetera.hasCafe(11);
        expect(resultado).toBe(false);
    });
    it("deberiaRestarCafeALaCafetera", () => {
        const cafetera = new Cafetera_1.default(10);
        cafetera.giveCafe(7);
        expect(cafetera.getCantidadCafe()).toBe(3);
    });
});
