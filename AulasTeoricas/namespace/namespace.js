"use strict";
var Geometria;
(function (Geometria) {
    let Areas;
    (function (Areas) {
        const pi = 3.14;
        function AreaCircunferencia(raio) { return pi * Math.pow(raio, 2); }
        Areas.AreaCircunferencia = AreaCircunferencia;
        function AreaRetangulo(base, altura) { return base * altura; }
        Areas.AreaRetangulo = AreaRetangulo;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Areas.AreaCircunferencia(5));
console.log(Geometria.Areas.AreaRetangulo(5, 10));
console.log(GeometriaCirulo.Area.Circunferencia(10));
console.log(GeometriaRetangulo.Area.Retangulo(20, 3));
