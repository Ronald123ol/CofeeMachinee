import ConfiguracionInterface from "../interfaces/Iconfiguracion.interface"
import Azucarero from "./Azuquero"
import Cafetera from "./Cafetera"
import MaquinaDeCafe from "./MaquinaDeCafe"
import Vaso from "./Vaso"

export default class Sistema
{
    private MaquinaDeCafe: MaquinaDeCafe
    private orden: any

    constructor(configuracion: ConfiguracionInterface )
    {
        this.MaquinaDeCafe = new MaquinaDeCafe()
        this.setUp(configuracion)
    }

    private setUp(config: ConfiguracionInterface)
    {
        const {azucar, cafe, vasos} = config
        const {pequeno, mediano, grande} = vasos
        
        const azucarera: Azucarero = new Azucarero(azucar)
        const cafetera: Cafetera = new Cafetera(cafe)
        const vsoPequeno: Vaso = new Vaso(pequeno.cantidad, pequeno.contenido)
        const vsoMediano: Vaso = new Vaso(mediano.cantidad,mediano.contenido)
        const vsoGrande: Vaso = new Vaso(grande.cantidad, grande.contenido)
        
        this.MaquinaDeCafe.setAzucarero(azucarera)
        this.MaquinaDeCafe.setCafetera(cafetera)
        this.MaquinaDeCafe.setVasosPequeno(vsoPequeno)
        this.MaquinaDeCafe.setVasosMediano(vsoMediano)
        this.MaquinaDeCafe.setVasosGrande(vsoGrande)
    }

    public pantallaInicial()
    {
        console.clear()
        return [
            {
                type: "rawlist",
                name: "opcion",
                message: "¿Desea iniciar Orden?",
                choices: ["Ordenar", "Apagar Sistema"],
                default: "Ordenar"
            }
        ]
    }

    public pantallaOrden()
    {
        console.clear()
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
        ]
    }

    public async PrepararOrden(orden: any)
    {
        console.clear()
        console.log("Espere...")
        return new Promise((resolve)=>{
             setTimeout(()=>{
                const {tipoVaso, azucar} = orden
                const vasoSeleccionado: Vaso = this.MaquinaDeCafe.getTipoDeVaso(tipoVaso)
                resolve( this.MaquinaDeCafe.getVasoDeCafe(vasoSeleccionado, 1, azucar) )
            },2000)
        })
    }


}