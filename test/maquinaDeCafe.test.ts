import MaquinaDeCafe from '../src/models/MaquinaDeCafe'
import Vaso from '../src/models/Vaso'
import Azucarero from '../src/models/Azuquero'
import Cafetera from '../src/models/Cafetera'

describe("Test Maquina de cafe", ()=> {

    let cafetera: Cafetera
    let vasosPequeno: Vaso
    let vasosMediano: Vaso
    let vasosGrande: Vaso
    let azucarero: Azucarero
    let maquinaDeCafe: MaquinaDeCafe
    
    
    beforeEach(()=>{
        cafetera = new Cafetera(50)
        vasosPequeno = new Vaso(5, 10)
        vasosMediano = new Vaso(5, 20)
        vasosGrande = new Vaso(5, 30)
        azucarero = new Azucarero(20)
        maquinaDeCafe = new MaquinaDeCafe()
        
        maquinaDeCafe.setCafetera(cafetera)
        maquinaDeCafe.setVasosPequeno(vasosPequeno)
        maquinaDeCafe.setVasosMediano(vasosMediano)
        maquinaDeCafe.setVasosGrande(vasosGrande)
        maquinaDeCafe.setAzucarero(azucarero)
    })

    test("deberiaDevolverUnVasoPequeno", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        expect( maquinaDeCafe.vasosPequeno ).toBe(vaso)
    })

    test("deberiaDevolverUnVasoMediano", ()=> {
        const maquinaDeCafe: MaquinaDeCafe = new MaquinaDeCafe()
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("mediano")
        expect( maquinaDeCafe.vasosMediano ).toBe(vaso)
    })

    test("deberiaDevolverUnVasoGrande", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("grande")
        expect( maquinaDeCafe.vasosGrande ).toBe(vaso)
    })

    test("deberiaDevolverNoHayVasos", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        const resultado: string = maquinaDeCafe.getVasoDeCafe(vaso, 10, 2)
        expect( resultado ).toBe("No hay Vasos")
    })

    test("deberiaDevolverNoHayCafe", ()=> {
        cafetera = new Cafetera(5)
        maquinaDeCafe.setCafetera(cafetera)
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        const resultado: string = maquinaDeCafe.getVasoDeCafe(vaso, 1, 2)
        expect( resultado ).toBe("No hay Cafe")
    })

    test("deberiaDevolverNoHayAzucar", ()=> {
        azucarero = new Azucarero(2)
        maquinaDeCafe.setAzucarero(azucarero)
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        const resultado: string = maquinaDeCafe.getVasoDeCafe(vaso, 1, 3)
        expect( resultado ).toBe("No hay Azucar")
    })

    test("deberiaRestarCafe", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        maquinaDeCafe.getVasoDeCafe(vaso, 1, 3)
        const resultado: number = maquinaDeCafe.getCafetera().getCantidadCafe()
        expect( resultado ).toBe(40)
    })

    test("deberiaRestarVaso", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        maquinaDeCafe.getVasoDeCafe(vaso, 1, 3)
        const resultado: number = maquinaDeCafe.getVasosPequeno().getCantidadVasos()
        expect( resultado ).toBe(4)
    })

    test("deberiaRestarAzucar", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        maquinaDeCafe.getVasoDeCafe(vaso, 1, 3)
        const resultado: number = maquinaDeCafe.getAzucarero().getCantidadAzucar()
        expect( resultado ).toBe(17)
    })

    test("deberiaDevolverFelicitaciones", ()=> {
        const vaso: Vaso = maquinaDeCafe.getTipoDeVaso("pequeno")
        const resultado: string = maquinaDeCafe.getVasoDeCafe(vaso, 1, 3)
        expect( resultado ).toBe("Felicitaciones")
    })
})