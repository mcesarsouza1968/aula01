// circulo.js
//Cria a variavel
var PI = Math.PI;
//Exporta o objeto area
//area e uma funcao
//depois de exporta-la, a function fica disponivel para quem chamou
exports.area = function (r) {
 return PI * r * r;
};

exports.circunferencia =
function (r) {
 return 2 * PI * r;
};