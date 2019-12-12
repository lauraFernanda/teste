const User = require("../models/Usuario");
const Usuario = require("../models/Usuario");

module.exports = {
  async store(req, res) {
    if (await user.findOne({ email: req.body.email })) {
      return res.status(400).json({ error: "Esse email ja foi cadastrado" });
    }
    const user = await User.create(req.body);
    await Usuario.update({ _id: req.comercio.usuario });
    return res.json(user);
  },
  async list(req, res) {
    const user = await User.find({});
    return res.json(user);
  },
  async index(req, res) {
    const user = await User.findOne({ _id: req.params.id });
    if (!usuario) {
      return res.status(400).json({ error: "Usuario não encontrado" });
    }
    return res.json(user);
  },
  async update(req, res) {
    const user = await User.findByIdAndUpdate(reqparams.id, req.body, {
      new: true
    });
    return res.json(user);
  },
  async destroy(req, res) {
    await User.deleteOne({ _id: req.params.id });
    return res.json({ message: "Excluido com sucesso!" });
  }
};
