const Commerces = require("../models/Commerce");

module.exports = {
  async store(req, res) {
    const commerces = await Commerces.create(req.body);
    return res.send(commerces);
  },
  async list(req, res) {
    const commerces = await Commerces.find({});
    return res.json(commerces);
  },
  async index(req, res) {
    const commerces = await Commerces.findOne({ name: req.params.name });
    return res.json(commerces);
  },
  async update(req, res) {
    const commerces = await Commerces.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(commerces);
  },
  async destroy(req, res) {
    await Commerces.deleteOne({ _id: req.params.id });
    return res.json({ message: "Exclusão realizada com sucesso!" });
  }
};
