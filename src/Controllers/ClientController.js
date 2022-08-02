import { Client } from "../Models/ClientModel.js";
export class ClientController{

    cadastrar(req, res){
        const {nome, telefone, rg} = req.body;
        let cliente = new Client(nome, telefone, rg);
        return res.status(200).json({
            nome: cliente.nome
        })

    }
}