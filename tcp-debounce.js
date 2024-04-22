const net = require("net")

// debounce effect to prevent the server from logging one letter a time
const debounce = (func, wait) => {
  let timeout;
  let dataChunks = [];
  return function executedFunction(chunk) {
    dataChunks.push(chunk);
    const later = () => {
      func(Buffer.concat(dataChunks));
      dataChunks = [];
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const server = net.createServer((socket) => {
  socket.write("Hello, I am the server!\n")
  socket.on("data", debounce((data) => {
    console.log(data.toString())
  }, 800));
})

server.listen(8080)
console.log('Server listening on port 8080!')