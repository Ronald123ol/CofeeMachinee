export default interface ConfiguracionInterface
{
    vasos: VasosInterface
    azucar: number
    cafe: number
}

interface VasosInterface
{
    pequeno: TipoDeVasoInterface
    mediano: TipoDeVasoInterface
    grande: TipoDeVasoInterface
}

interface TipoDeVasoInterface
{
    cantidad: number
    contenido: number
}