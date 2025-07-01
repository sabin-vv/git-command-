const express = require('express')
const app = express()

app.get ("/",(req,res) => {

    function func(a,b){
    return a+b
}
    const result  = func(2,4)
    console.log(result)
    res.send(`result ${result}`)
})


app.listen(8000,() => {
    console.log("server started")
})