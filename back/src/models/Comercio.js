const { Schema, model } = require("mongoose");

const CommerceSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    nome_rua: {
      type: String,
      required: true
    },
    numero_rua: {
      type: Number,
      required: true
    },
    bairro: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    usuarios: [
      {
      type: Schema.Types.ObjectId,
      ref: "Usuario"
      }
  ]
  },
  
  {
    timestamps: true
  }
);

module.exports = model("Commerce", CommerceSchema);
