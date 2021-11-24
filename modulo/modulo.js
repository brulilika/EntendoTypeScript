"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const circulo_1 = __importDefault(require("./circulo"));
const retangulo_1 = require("./retangulo");
console.log((0, circulo_1.default)(10));
console.log((0, retangulo_1.areaRetangulo)(5, 6));
