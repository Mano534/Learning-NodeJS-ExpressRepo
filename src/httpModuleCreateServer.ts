import { createServer } from 'http';

const server = createServer((req, res) => {
    if (req.url === "/") {
        res.write('welcome to the home page');
        res.end()
    }
    if (req.url === "/about") {
        res.end('welcome to the about page');
    }
    res.end('Opps!! <br/> 404 ERROR!! Page Not Found');
})

server.listen(5000)