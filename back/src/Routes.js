const express = require('express');
const routes = express.Router();

const UserController = require("./controllers/UserController");
const CommerceController = require("./controllers/CommerceController")
const SessionController = require("./controllers/SessionController");
// const CotacaoController = require("./controllers/CotacaoController");
const ProdutoController = require("./controllers/ControllerProduto");
const authMiddleware = require("./middlewares/auth");
const authorizationMiddleware = require("./middlewares/authorization")

//post: guardar, get: pegar, put:alterar, delete:excluir

routes.post("/sessions", SessionController.store);
routes.post("/Us", UserController.store);
routes.get('/Us', UserController.list);
routes.get('/Us/:email', UserController.index)
routes.put('/UI/:id', UserController.update);
routes.delete("/Us/:id", UserController.destroy);

routes.post("/commerce", CommerceController.store);
routes.get('/commerce', CommerceController.list);


routes.post("/produto", ProdutoController.store);
routes.get("/produto", ProdutoController.list)


routes.use(authMiddleware);
routes.post("/Us", authorizationMiddleware, UserController.store)


module.exports = routes