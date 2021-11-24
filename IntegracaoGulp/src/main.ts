import Livro from "./modelo/livro";

const livro = new Livro("50 tons de cinza", 50.00 , 0.15)

$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`<h3>Valor: R$ ${livro.preco}</h3>`)