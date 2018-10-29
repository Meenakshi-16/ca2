var mongoose = require("mongoose");

var FormSchema = new mongoose.Schema({
   name: String,
   regno: String,
   email: String,
   contact: String
});


module.exports = mongoose.model("Form", FormSchema);