const models = require("./models");

function addUser(req, res) {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  models.user
    .create(user)
    .then((result) => {
      res.status(201).json({
        message: "User added successfully",
        addUser: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "User already added",
      });
    });
}

function checkUser(req, res) {
  models.user
    .findOne({where: {email:req.params.email}})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Cannot find user"
      });
    });
}

module.exports = {
    addUser:addUser,
    checkUser:checkUser
}