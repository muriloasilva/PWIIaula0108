import express from 'express';
import { ClientController } from './src/Controllers/ClientController.js';
const routes = express.Router();

routes.get("/", (req, res) => {
    return res.status(200).json({
        msg: "Funcionou"
    })
});

routes.post("/novo", ClientController)

export {routes}