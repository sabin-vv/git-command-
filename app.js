const express = require('express')
const app = express()

app.get ("/",(req,res) => {
    res.send("server Running")
})

function func(a,b){
    return a+b
}

const result  = func(2,4)
res.send("result" ,result)

app.listen(8000,() => {
    console.log("server started")
})