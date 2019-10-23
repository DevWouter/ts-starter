import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello world from ${req.url}`);
});

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});