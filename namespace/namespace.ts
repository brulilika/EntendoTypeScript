namespace Geometria
{
    export namespace Areas{
        const pi = 3.14
    
        export function AreaCircunferencia(raio : number) : number { return pi*Math.pow(raio,2) }
        
        export function AreaRetangulo(base : number, altura:number) : number{ return base*altura }
    }
}

console.log(Geometria.Areas.AreaCircunferencia(5))
console.log(Geometria.Areas.AreaRetangulo(5,10))

console.log(GeometriaCirulo.Area.Circunferencia(10))
console.log(GeometriaRetangulo.Area.Retangulo(20,3))