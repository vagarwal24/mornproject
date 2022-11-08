const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html')
	console.log(req.url)
	

	if(req.url == '/'){
		res.statusCode = 200;
		res.end('<h1> This is CodeWithHarry </h1> <p> Hey This is way to rock the world!</p>');

     }

	else if(req.url == '/about'){
		res.statusCode = 200;
		res.end('<h1> About CodeWithHarry </h1> <p> Hey This is Anout CodeWithHarry!</p>');

     }

     else if(req.url == '/hello'){
		res.statusCode = 200;
		const data =fs.readFileSync('index.html')
		res.end(data.toString());

     }
     else{
     	res.statusCode = 404;
     	res.end('<h1> Not Found</h1> <p> Hey This page was not found!</p>');
     }
	
})

server.listen(port, () => {
	console.log('Server is listening on port ${port}');
	})