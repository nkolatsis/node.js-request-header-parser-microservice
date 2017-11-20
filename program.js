var express = require("express")

var app = express()
app.listen(5000)

app.get("/", (req, res) => {
    var ipaddress = req.connection.remoteAddress
    var language = req.headers["accept-language"].split(",")[0]
    var software = req.headers["user-agent"].match(/^.*\((.*)\).*$/)[1]
    var userDetails = {"ipaddress": ipaddress, "language" : language, "software": software }
    res.end(JSON.stringify(userDetails))
})