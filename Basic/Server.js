const http = require("http")

const Server = http.createServer((req, res) => {
    console.log("Request made")
})

Server.listen(3000, "localhost", () => {
    console.log("Listening on port 3000")
} )