// Requisitamos o módulo http do Node
//require=> ferramenta que efetua uma ferramenta do modulo que  
//estamos solicitando
var http = require('http');

// Executamos o método para criar o servidor
var server = http.createServer(function(request, response) {
	//console.log(request.url);
	 response.writeHead(200, {'Content-Type': 'text/html'});

	 var url = require('url');
	 var result = url.parse(request.url, true);

	 for(var key in result.query){
	 response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
	 }
	 
	 response.end();
});

// Iniciamos o servidor criado
server.listen(3000, function() {
 console.log('Servidor rodando!');
});