const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router()

const BoxController = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')

routes.post("/boxes", BoxController.store)
routes.post(
    "/boxes/:id/files", 
    multer(multerConfig).single('fileField'), 
    FileController.store)
routes.get("/boxes/:id", BoxController.show)

//routes.get('/', (req, res) => {
//    return res.send('Hello World')
//})

module.exports = routes

