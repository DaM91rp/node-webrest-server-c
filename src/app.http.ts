import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.url);

    // const data = { name: 'Jhon Doe', age: 30, city: 'New York' };
    // res.writeHead(200, { 'Content-Type': 'application/json '});
    // res.end( JSON.stringify(data) );

    if ( req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html','utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end( htmlFile );
        return;
    }

    if ( req.url?.endsWith('.js')) {
        res.writeHead(200, { 'Content-Type': 'application/javascript'});
    }else if( req.url?.endsWith('.css')){
        res.writeHead(200, { 'Content-Type': 'text/css'});
    }

    const responseContet = fs.readFileSync(`./public${ req.url }`, 'utf-8');
    res.end(responseContet);

});

server.listen(8080, () => {
    console.log('Server running on port 8080');
}); 