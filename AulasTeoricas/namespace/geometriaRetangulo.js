"use strict";
var GeometriaRetangulo;
(function (GeometriaRetangulo) {
    let Area;
    (function (Area) {
        const pi = 3.14;
        function Retangulo(base, altura) {
            return base * altura;
        }
        Area.Retangulo = Retangulo;
    })(Area = GeometriaRetangulo.Area || (GeometriaRetangulo.Area = {}));
})(GeometriaRetangulo || (GeometriaRetangulo = {}));
