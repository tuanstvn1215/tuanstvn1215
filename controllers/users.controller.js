const shortid = require("shortid");
const User = require("../models/user.model");

module.exports.getIndex = (req, res) => {
   User.find({}, (err, users) => {
      if (err) {
         console.log(err);
      } else {
         res.render("users/index", { users: users });
      }
   });
};
module.exports.postIndex = (req, res) => {};

module.exports.getView = (req, res) => {
   var id = req.params.id;
   User.findById(id, (err, user) => {
      if (err) {
         console.log(err);
      } else {
         res.render("users/view", { user: user });
      }
   });
};

module.exports.getSearch = (req, res) => {
   User.find({}, (err, users) => {
      if (err) {
         console.log(err);
      } else {
         var q = req.query.q;
         var matchedUsers = users.filter(function (user) {
            return user.name.indexOf(q) !== -1;
         });
         res.render("users/index", { users: matchedUsers, q: q });
      }
   });
};

module.exports.getCreate = (req, res) => {
   res.render("users/create");
};
module.exports.postCreate = (req, res) => {
   var id = shortid.generate();
   req.body._id = id;
   User.insertMany(req.body, (err) => {
      if (err) {
         console.log(err);
      }
   });
   res.redirect("/users");
};
