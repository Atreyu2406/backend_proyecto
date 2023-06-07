import { Router } from "express"
import fs from "fs"
import { ProductManager } from "../../productsManager.js"

const router = Router()

const prod = new ProductManager(`./productsDb.json`)
let db = JSON.parse(await fs.promises.readFile("./productsDb.json"))

//endponit para leer todos los usuarios
router.get ("/", async (req, res) => {
    res.status(200).json ({ db })
})

//endpoint para leer un solo usuario a partir de su ID
router.get ("/:id", (req, res) => {
    const id = req.params.id
    const product = db.find (item => item.id == id)
    if (!product) return res.status(404).json ({ message: "Username does not exist"})
    res.json ({ product })
})

//endpoint para dar de alta un nuevo usuario
router.post ("/", (req, res) => {
    const { title, description, price, code, stock, img } = req.body
    db.push ({ id: prod.generateId(), title, description, price, code, stock, img })
    res.json ({ message: "Usuario registrado con éxito"})
})
/*
//endpoint para actualizar los datos de un usuario
router.put ("/:id", async (req, res) => {
    const id = req.params.id
    const data = req.body
    const productIndex = db.findIndex (item => item.id == id)
    db[productIndex] = { ...db[productIndex], ...data }
    res.json ({ message: ` Actualización exitosa con el id = ${id}` })
})

//endpoint para eliminar/borrar un usuario
router.delete ("/:id", (req, res) => {
    const id = req.params.id
    db = db.filter(item => item.id != id)
    res.json ({ message: ` Usuario con el id = ${id} es iliminado` })
})
*/
export default router
