const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const word = 'aaasssaa0';

// const buf = Buffer.from('hello', 'utf8');

// console.log(buf.toString('hex'));
// // Prints: 68656c6c6f20776f726c64
// console.log(buf.toString('base64'));
// // Prints: aGVsbG8gd29ybGQ=

// console.log(Buffer.from(word, 'utf8'));
// console.log(Buffer.from(word, 'utf16le'));

// const dns = require('dns');

// dns.lookup('example.org', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family);
//   console.log(`address: ${address} family: IPv${family}`);

// });
// address: "93.184.216.34" family: IPv4
