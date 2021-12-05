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
const Azuquero_1 = __importDefault(require("./Azuquero"));
const Cafetera_1 = __importDefault(require("./Cafetera"));
const MaquinaDeCafe_1 = __importDefault(require("./MaquinaDeCafe"));
const Vaso_1 = __importDefault(require("./Vaso"));
class Sistema {
    constructor(configuracion) {
        this.MaquinaDeCafe = new MaquinaDeCafe_1.default();
        this.setUp(configuracion);
    }
    setUp(config) {
        const { azucar, cafe, vasos } = config;
        const { pequeno, mediano, grande } = vasos;
        const azucarera = new Azuquero_1.default(azucar);
        const cafetera = new Cafetera_1.default(cafe);
        const vsoPequeno = new Vaso_1.default(pequeno.cantidad, pequeno.contenido);
        const vsoMediano = new Vaso_1.default(mediano.cantidad, mediano.contenido);
        const vsoGrande = new Vaso_1.default(grande.cantidad, grande.contenido);
        this.MaquinaDeCafe.setAzucarero(azucarera);
        this.MaquinaDeCafe.setCafetera(cafetera);
        this.MaquinaDeCafe.setVasosPequeno(vsoPequeno);
        this.MaquinaDeCafe.setVasosMediano(vsoMediano);
        this.MaquinaDeCafe.setVasosGrande(vsoGrande);
    }
    pantallaInicial() {
        console.clear();
        return [
            {
                type: "rawlist",
                name: "opcion",
                message: "¿Desea iniciar Orden?",
                choices: ["Ordenar", "Apagar Sistema"],
                default: "Ordenar"
            }
        ];
    }
    pantallaOrden() {
        console.clear();
        return [
            {
                type: "list",
                name: "tipoVaso",
                message: "Seleccionar el tamaño de vaso de café:",
                choices: ["Pequeno", "Mediano", "Grande"]
            },
            {
                name: "azucar",
                message: "Seleccionar las cucharadas de azúcar:"
            },
            {
                name: "confirm",
                message: "Confirmar Orden: ",
                default: "si"
            }
        ];
    }
    PrepararOrden(orden) {
        return __awaiter(this, void 0, void 0, function* () {
            console.clear();
            console.log("Espere...");
            return new Promise((resolve) => {
                setTimeout(() => {
                    const { tipoVaso, azucar } = orden;
                    const vasoSeleccionado = this.MaquinaDeCafe.getTipoDeVaso(tipoVaso);
                    resolve(this.MaquinaDeCafe.getVasoDeCafe(vasoSeleccionado, 1, azucar));
                }, 2000);
            });
        });
    }
}
exports.default = Sistema;
