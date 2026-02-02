import express from "express"

const app = express()
const port = 3000
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true })) 
app.use(express.json()) 

app.post("/test", (req, res) => {
    console.log(req.body)
    const respuesta={
        msg:" datos recibidos",
        payload: req.body
    }
    res.json(respuesta)
})

app.listen(port,()=>{
    console.log(`Serever funcionando ${port}`)
})