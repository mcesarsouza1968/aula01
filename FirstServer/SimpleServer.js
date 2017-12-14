// Requisitamos o módulo http do Node
//require=> ferramenta que efetua uma ferramenta do modulo que  
//estamos solicitando
var http = require('http');
var faker = require('faker');
// Executamos o método para criar o servidor
var server = http.createServer(function(request, response) {
	//console.log(request.url);
	 response.writeHead(200, {'Content-Type': 'text/html'});

	 var randomName = faker.name.findName();
 	 var randomImage = faker.internet.avatar();
 	 response.write('Your random name: ' + randomName + "<img src='"+randomImage + "'/>");
	 
	 response.end();
});

// Iniciamos o servidor criado
server.listen(3000, function() {
 console.log('Servidor rodando!');
});