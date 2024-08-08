import net from "net"

const server = net.createServer()

server.listen(3302, '0.0.0.0', () => {
    console.log("Server is listening on port 3302")
})

server.on("connection", (socket) => {
    socket.on("data", (data) => {
        console.log(socket.remoteAddress + ':' + socket.remotePort)
        console.log(data.toString())
        socket.write("pong" + JSON.stringify(server.address()))
    })
})
