// Requisitamos o módulo http do Node
//require=> ferramenta que efetua uma ferramenta do modulo que  
//estamos solicitando
var http = require('http');
var circulo = require('./circulo.js');

// Executamos o método para criar o servidor
var server = http.createServer(function(request, response) {
		 	console.log(circulo);

		 	response.writeHeader(200, {'Content-Type':'text/html'});

		 	var url = require('url');
	 		var result = url.parse(request.url, true);

	 		 for(var key in result.query){
	 		 	response.write( '<br>Um circulo de raio '+ result.query[key] +' tem area de ' + circulo.area(result.query[key]));
	 		 }

		 	//response.write( 'Um circulo de raio 4 tem area de ' + circulo.area(result.query[key]));
		 	
		 	response.end();
	 });

// Iniciamos o servidor criado
server.listen(3000, function() {
 console.log('Servidor rodando!');
});