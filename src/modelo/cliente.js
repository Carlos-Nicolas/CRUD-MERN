const mongoose = require('mongoose');
const {Schema} = mongoose;


const ClienteSchema = new Schema({
    nombre: {type: String, Require:true}, 
    edad:{type: Number , Require:true},
    telefono:{type: String, Require:false},
    empresa:{type: String, Require:true}
});

module.exports = mongoose.model('cliente',ClienteSchema);