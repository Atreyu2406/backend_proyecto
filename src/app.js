import express from "express"
import userRouter from "./routers/user.router.js"

const app = express()
app.use (express.json())

//endpoints
app.get ("/", (req, res) => res.send ("OK"))
app.get ("/health", (req, res) => res.json ({ message: "The server is running on port 8080"}))

app.use ("/products", userRouter)

//endpoint para leer todos los productos
//endpoint para leer un solo producto a través de su ID
//endpoint para crear/registrar/dar de alta un nuevo producto
//endpoint para actualizar un producto a partir de su ID
//endpoint para eliminar a un producto a partir de su ID

app.listen (8080, () => console.log ("server up..."))