import Vaso from '../src/models/Vaso'

describe("Test Vaso", ()=> {
    test("deberiaDevolverVerdaderoSiExistenVasos", ()=> {
        const vasoPequenos: Vaso = new Vaso(2, 10)
        const resultado: Boolean = vasoPequenos.hasVasos(1)
        expect(resultado).toBe(true)
    })
    
    test("deberiaDevolverFalsoSiNoExistenVasos", ()=> {
        const vasoPequenos: Vaso = new Vaso(1, 10)
        const resultado: Boolean = vasoPequenos.hasVasos(2)
        expect(resultado).toBe(false)
    })
    
    test("deberiaRestarCantidadesDeVaso", ()=> {
        const vasoPequenos: Vaso = new Vaso(5, 10)
        vasoPequenos.giveVasos(1)
        expect(vasoPequenos.getCantidadVasos()).toBe(4)    
    })
})