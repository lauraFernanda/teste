const { Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserSchema = new Schema(
  {
    nome:{
      type: String,
      require: true
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    senha:{
      type: String,
      required: true
    },
    token:{
      type: String,
      required: true
    }
  },
  {
    timestamp: true
  }
);
UserSchema.pre("save", async function(next){
  if(!this.isModified("password")){
    return next();
  }

  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.method = {
  compareHash(password){
    return bcrypt.compare(password, this.password);
  }
};

UsuarioSchema.statics = {
  generateToken({id}){
    return jwt.sign({id}, authConfig.secret, {
      expiresIn: authConfig.ttl
    });
  }
}
module.exports = model("Usuario", UserSchema);