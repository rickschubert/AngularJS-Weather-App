const express = require("express")
const path = require("path")
const cors = require("cors")

if (process.env.NODE_ENV != "production") {
    process.env.PORT = 4000
}

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, "./../")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./../index.html"))
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}.`)
})