import Azucarero from '../src/models/Azuquero'

describe("Test Azuquero", ()=> {
    
    let azuquero: Azucarero
    
    beforeAll(()=>{
        azuquero = new Azucarero(10)
    })
    
    test("deberiaDevolverVerdaderoSiHaySuficienteAzucarEnElAzuquero", ()=> {
        expect( azuquero.hasAzucar(5) ).toBe(true)
        
        expect( azuquero.hasAzucar(10) ).toBe(true)
    })
    
    test("deberiaDevolverFalsoPorqueNoHaySuficienteAzucarEnElAzuquero", ()=> {
        expect( azuquero.hasAzucar(15) ).toBe(false)
    })
    
    test("deberiaRestarAzucarAlAzuquero", ()=> {
        azuquero.giveAzucar(5)
        expect( azuquero.getCantidadAzucar() ).toBe(5)
        
        azuquero.giveAzucar(2)
        expect( azuquero.getCantidadAzucar() ).toBe(3)
        
    })
})