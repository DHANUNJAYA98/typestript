/*const dns = require('node:dns');

dns.lookup('example.org', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
dns.lookup('amazon.org',(err,address,family)=> {
  console.log('address:%j family:IPv%s',address,family);
})
// address: "2606:2800:21f:cb07:6820:80da:af6b:8b2c" family: IPv6

const dns=require('dns')
dns.resolve4('google.com',(err,address)=>{
    if(err){
        throw err
    }
    console.log(`address:${JSON.stringify(address)}`,address)
    address.forEach((a)=>{
        dns.reverse(a,(err,hostnames)=>{
            if(err){
                throw err;
            }
            console.log(`reverse for ${a}:${JSON.stringify(hostnames)}`);
        })
    })
})

const { Resolver } = require('node:dns');
const resolver = new Resolver();
resolver.setServers(['8.8.8.8']); // Google's Public DNS server
const arr=resolver.getServers();
console.log(arr);
resolver.resolve4('example.org', (err, addresses) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  console.log(`IPv4 addresses: ${addresses}`);
});
*/
const http = require('node:http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
server.on('upgrade', (req, socket, head) => {
  socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
               'Upgrade: WebSocket\r\n' +
               'Connection: Upgrade\r\n' +
               '\r\n');

  socket.pipe(socket); // echo back
});

// Now that server is running
server.listen(1337, '127.0.0.1', () => {

  // make a request
  const options = {
    port: 1337,
    host: '127.0.0.1',
    headers: {
      'Connection': 'Upgrade',
      'Upgrade': 'websocket',
    },
  };

  const req = http.request(options);
  req.end();

  req.on('upgrade', (res, socket, upgradeHead) => {
    console.log('got upgraded!');
    socket.end();
    process.exit(0);
  });
});