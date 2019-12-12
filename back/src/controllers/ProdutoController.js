const Produto = require("../models/Produto");

module.exports = {
  async store(req, res) {
    const produto = await Produto.create(req.body);
    return res.json(produto);
  },
  async list(req, res) {
    const produto = await Produto.find({});
    return res.json(produto);
  },
  async index(req, res) {
    const produto = await Produto.findOne({ numero_rua: req.params.numero_rua });

    if (!produto) {
      return res.status(400).json({ error: "Comércio não encontrado!" });
    }
    return res.json(produto);
  },
  async update(req, res) {
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(produto);
  },
  async destroy(req, res) {
    await Produto.deleteOne({ _id: req.params.id });
    return res.json({ message: "Excluido com Sucesso!!" });
  }
};