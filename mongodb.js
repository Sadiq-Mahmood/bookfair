const mongoose = require("mongoose");

const monogodb = () => {
  mongoose
    .connect("mongodb://localhost/bookfair")
    .then(() => console.log("connected to mongodb successfulyy"))
    .catch((err) => console.log("could not connected to mongodb", err));
};

module.exports = monogodb;

// async function registerNewUser() {
//   const user = new User({
//     name: "Sadiq Mahmood",
//     email: "sadiqmahmood344@gmail.com",
//   });

//   const result = await user.save();
//   console.log(result);
// }

// registerNewUser();
