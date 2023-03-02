// imports
import express, { Express, request, response } from "express";
import { data } from "./products";

const server: Express = express()
// server plagens
server.use(express.json())
server.use(express.urlencoded())

server.get('/products', (request, response) => {
    response
        .status(200)
        .send(data.products)
})

server.get('/products/:id', (request, response) => {
    const id = Number(request.params.id)
    const indexId = data.products.find(product => product.id == id)

    response
        .status(200)
        .send(indexId?.images)
})
server.get('/products/:id/images', (request, response) => {
    const id = Number(request.params.id)
    const indexId = data.products.find(products => products.id == id)

    response
        .status(200)
        .send(indexId?.images)
})


server.get('/category/:cat', (req, res) => {
    const categoryId = Number(request.params.categoryId)
    const cat = data.products.filter(produts => cat.categoryId == categoryId)
    response
        .status(200)
        .send(cat)
})

// sever port
server.listen(2121, () => {
    console.log('Server working... (Port: 2121)');

})