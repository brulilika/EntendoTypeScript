"use strict";
var GeometriaCirulo;
(function (GeometriaCirulo) {
    let Area;
    (function (Area) {
        const pi = 3.14;
        function Circunferencia(raio) {
            return pi * Math.pow(raio, 2);
        }
        Area.Circunferencia = Circunferencia;
    })(Area = GeometriaCirulo.Area || (GeometriaCirulo.Area = {}));
})(GeometriaCirulo || (GeometriaCirulo = {}));
