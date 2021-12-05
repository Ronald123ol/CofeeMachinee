import ConfiguracionInterface from "../interfaces/Iconfiguracion.interface"
import Sistema from '../models/Sistema'
import inquirer from 'inquirer'

const configuracionMaquinaCafe: ConfiguracionInterface = {
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
}


const main = async () => {
    const input = async (obj: any) => await inquirer.prompt(obj)
    const sistema: Sistema = new Sistema(configuracionMaquinaCafe)
    let opcionSeleccionada: string
    
    do {
        const opcion: any = await input(sistema.pantallaInicial())
        opcionSeleccionada = opcion.opcion
        if(opcionSeleccionada !== "Apagar Sistema")
        {
            let orden: any = await input(sistema.pantallaOrden())
            const {confirm, azucar} = orden
            try{

            const intAzucar = parseInt(azucar)
                orden = {...orden, azucar: intAzucar}
            }catch{
                await input({name: "espera", message: "Error de entrada, intentar nuevamente"})
                orden = null
            }
            if(confirm.toUpperCase() === "SI")
            {   
                let resultado = await sistema.PrepararOrden(orden)
                console.clear()
                console.log(resultado)
                if(resultado === "Felicitaciones")
                {
                    await input({name: "espera", message: "Puedes Retirar Tu Café"})
                }else{
                    await input({name: "espera", message: "Lo Sentimos... :("})
                }
            }
        }
    }while(opcionSeleccionada !== "Apagar Máquina")

    console.clear()
    console.log("***********ADIOS**************")
}

main()