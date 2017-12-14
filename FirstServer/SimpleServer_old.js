// Requisitamos o módulo http do Node
//require=> ferramenta que efetua uma ferramenta do modulo que  
//estamos solicitando
var http = require('http');

// Executamos o método para criar o servidor
var server = http.createServer(function(request, response) {
	//console.log(request.url);
	 response.writeHead(200, {'Content-Type': 'text/html'});

	 if(request.url === "/")
	 {
	 	response.write('<h1>Pagina Inicial</h1>')
	 }
	 else if(request.url === "/sobre"){
	 	response.write('<h1>Sobre</h1>');
	 }
	 else
	 {
	 	response.write('<h1>Pagina nao encontrada</h1>');
	 }
	 response.end();
});

// Iniciamos o servidor criado
server.listen(3000, function() {
 console.log('Servidor rodando!');
});