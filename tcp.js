const net = require("net")

const server = net.createServer((socket) => {
    socket.write("Hello, I am the server!\n")
    socket.on("data", data => {
        console.log(data.toString())
    })
})

server.listen(8080)
console.log('Server listening on port 8080!')