const Usuario = require("../models/Usuario");

module.exports ={
  async StorageEvent(req, res){
    const {email, password} =  req.body;
    const user =  await Usuario.findOne({email});

    if(!user){
      return res. status(400).json({error: "Usuario  não encontrado "});
    }
    if(!(await user.compareHash(password))){
      return res.status(400).json({error: "Senha inválida"})
    }

    return res.json({user, token: Usuario.generateToken(user)});
  }
}
