// Requisitamos o módulo http do Node
//require=> ferramenta que efetua uma ferramenta do modulo que  
//estamos solicitando
var http = require('http');

// Executamos o método para criar o servidor
var server = http.createServer(function(request, response) {
		 var fs = require('fs');
		 fs.readFile(__dirname + '/index.html', function(err,html){
		 	response.writeHeader(200, {'Content-Type':'text/html'});
		 	response.write(html);
		 	response.end();
		 });
	 });

// Iniciamos o servidor criado
server.listen(3000, function() {
 console.log('Servidor rodando!');
});