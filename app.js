const express = require('express')
const app = express()

app.get("/", (req, res) => {
    function func(a, b) {
        return a + b
    }
    const result = func(2, 4)
    console.log(result)
    res.send(`result ${result}`)
})

app.get("home", (req, res) => {
    function func2(num1, num2) {
        return num1 * num2
    }
    const result = func2(2, 2)
    res.send(`resulr : ${result}`)
})


app.listen(8000, () => {
    console.log("server started")
})