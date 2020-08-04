const mongoose = require("../db/mongoose");
const usersSchema = new mongoose.Schema({
   _id: String,
   name: String,
});
const User = mongoose.model("user", usersSchema, "users");
/*User.create({ _id: "1", name: "tuan" });*/
module.exports = User;
