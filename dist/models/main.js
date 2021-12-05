"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sistema_1 = __importDefault(require("../models/Sistema"));
const inquirer_1 = __importDefault(require("inquirer"));
const configuracionMaquinaCafe = {
    vasos: {
        pequeno: {
            cantidad: 10,
            contenido: 3
        },
        mediano: {
            cantidad: 8,
            contenido: 5
        },
        grande: {
            cantidad: 6,
            contenido: 7
        }
    },
    azucar: 25,
    cafe: 15
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const input = (obj) => __awaiter(void 0, void 0, void 0, function* () { return yield inquirer_1.default.prompt(obj); });
    const sistema = new Sistema_1.default(configuracionMaquinaCafe);
    let opcionSeleccionada;
    do {
        const opcion = yield input(sistema.pantallaInicial());
        opcionSeleccionada = opcion.opcion;
        if (opcionSeleccionada !== "Apagar Sistema") {
            let orden = yield input(sistema.pantallaOrden());
            const { confirm, azucar } = orden;
            try {
                const intAzucar = parseInt(azucar);
                orden = Object.assign(Object.assign({}, orden), { azucar: intAzucar });
            }
            catch (_a) {
                yield input({ name: "espera", message: "Error de entrada, intenta otra vez :(" });
                orden = null;
            }
            if (confirm.toUpperCase() === "SI") {
                let resultado = yield sistema.PrepararOrden(orden);
                console.clear();
                console.log(resultado);
                if (resultado === "Felicitaciones") {
                    yield input({ name: "espera", message: "Puedes Retirar Tu Café" });
                }
                else {
                    yield input({ name: "espera", message: "Lo Sentimos... :(" });
                }
            }
        }
    } while (opcionSeleccionada !== "Apagar Sistema");
    console.clear();
    console.log("***********ADIOS**************");
});
main();
