"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MaquinaDeCafe_1 = __importDefault(require("../src/models/MaquinaDeCafe"));
const Vaso_1 = __importDefault(require("../src/models/Vaso"));
const Azuquero_1 = __importDefault(require("../src/models/Azuquero"));
const Cafetera_1 = __importDefault(require("../src/models/Cafetera"));
describe("Test Maquina de cafe", () => {
    let cafetera;
    let vasosPequeno;
    let vasosMediano;
    let vasosGrande;
    let azucarero;
    let maquinaDeCafe;
    beforeEach(() => {
        cafetera = new Cafetera_1.default(50);
        vasosPequeno = new Vaso_1.default(5, 10);
        vasosMediano = new Vaso_1.default(5, 20);
        vasosGrande = new Vaso_1.default(5, 30);
        azucarero = new Azuquero_1.default(20);
        maquinaDeCafe = new MaquinaDeCafe_1.default();
        maquinaDeCafe.setCafetera(cafetera);
        maquinaDeCafe.setVasosPequeno(vasosPequeno);
        maquinaDeCafe.setVasosMediano(vasosMediano);
        maquinaDeCafe.setVasosGrande(vasosGrande);
        maquinaDeCafe.setAzucarero(azucarero);
    });
    test("deberiaDevolverUnVasoPequeno", () => {
        const vaso = maquinaDeCafe.getTipoDeVaso("pequeno");
        expect(maquinaDeCafe.vasosPequeno).toBe(vaso);
    });
    test("deberiaDevolverUnVasoMediano", () => {
        const maquinaDeCafe = new MaquinaDeCafe_1.default();
        const vaso = maquinaDeCafe.getTipoDeVaso("mediano");
        expect(maquinaDeCafe.vasosMediano).toBe(vaso);
    });
    test("deberiaDevolverUnVasoGrande", () => {
        const vaso = maquinaDeCafe.getTipoDeVaso("grande");
        expect(maquinaDeCafe.vasosGrande).toBe(vaso);
    });
    test("deberiaDevolverNoHayVasos", () => {
        const vaso = maquinaDeCafe.getTipoDeVaso("pequeno");
        const resultado = maquinaDeCafe.getVasoDeCafe(vaso, 10, 2);
        expect(resultado).toBe("No hay Vasos");
    });
    test("deberiaDevolverNoHayCafe", () => {
        cafetera = new Cafetera_1.default(5);
        maquinaDeCafe.setCafetera(cafetera);
        const vaso = maquinaDeCafe.getTipoDeVaso("pequeno");
        const resultado = maquinaDeCafe.getVasoDeCafe(vaso, 1, 2);
        expect(resultado).toBe("No hay Cafe");
    });
    test("deberiaDevolverNoHayAzucar", () => {
        azucarero = new Azuquero_1.default(2);
        maquinaDeCafe.setAzucarero(azucarero);
        const vaso = maquinaDeCafe.getTipoDeVaso("pequeno");
        const resultado = maquinaDeCafe.getVasoDeCafe(vaso, 1, 3);
        expect(resultado).toBe("No hay Azucar");
    });
    test("deberiaRestarCafe", () => {
        const vaso = maquinaDeCafe.getTipoDeVaso("pequeno");
        maquinaDeCafe.getVasoDeCafe(vaso, 1, 3);
        const resultado = maquinaDeCafe.getCafetera().getCantidadCafe();
        expect(resultado).toBe(40);
    });
    test("deberiaRestarVaso", () => {
        const vaso = maquinaDeCafe.getTipoDeVaso("pequeno");
        maquinaDeCafe.getVasoDeCafe(vaso, 1, 3);
        const resultado = maquinaDeCafe.getVasosPequeno().getCantidadVasos();
        expect(resultado).toBe(4);
    });
    test("deberiaRestarAzucar", () => {
        const vaso = maquinaDeCafe.getTipoDeVaso("pequeno");
        maquinaDeCafe.getVasoDeCafe(vaso, 1, 3);
        const resultado = maquinaDeCafe.getAzucarero().getCantidadAzucar();
        expect(resultado).toBe(17);
    });
    test("deberiaDevolverFelicitaciones", () => {
        const vaso = maquinaDeCafe.getTipoDeVaso("pequeno");
        const resultado = maquinaDeCafe.getVasoDeCafe(vaso, 1, 3);
        expect(resultado).toBe("Felicitaciones");
    });
});
