import net from "net"

const client = new net.Socket({ writable: true })

client.connect(3302, '127.0.0.1', () => {
    client.write("ping" + JSON.stringify(client.address()))
})

client.on("data", (data) => {
    console.log(data.toString())
    // client.destroy()
})
