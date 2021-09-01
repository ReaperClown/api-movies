const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Port may vary depending on the network
// 8080, 9000, 4280
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);
