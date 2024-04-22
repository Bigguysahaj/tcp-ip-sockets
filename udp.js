const dgram = require('dgram') // datagram module
const server = dgram.createSocket('udp4') // udp4 for ipv4

Socket.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`)
})

Socket.bind(8081)
console.log('Server listening on port 8081!')