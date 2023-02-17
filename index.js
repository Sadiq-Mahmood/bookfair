const express = require("express");
const app = express();
const Joi = require("joi");
const db = require("./mongodb");
const Register = require("./components/models/register");
const newSellerUser = require("./components/models/sellerUser");

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

db();
app.use(express.json());

app.post("/register/", async (req, res) => {
  const { email } = req.body;

  try {
    if (!req.body.name || req.body.name.length < 3) {
      res
        .status(400)
        .send("name is required and should be mininmum 3 character");
      return;
    }

    const oldUser = await Register.findOne({ email });
    if (oldUser) {
      res.status(404).send("User already exists");
    }

    if (req.body.user == "seller") {
      const newUser = await newSellerUser.create({
        name: req.body.name,
        email: req.body.email,
      });
    } else {
      const newUser = await Register.create({
        name: req.body.name,
        email: req.body.email,
      });
    }

    // console.log(newUser);

    if (newUser) {
      res.status(200).send(newUser);
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  } catch (err) {
    res.send(err);
  }
});
//   const result = validate(req.body);
//   if (result.error) {
//     res.status(400).send(result.error.details[0].message);
//     return;
//   }
//   const user = {
//     name: req.body.name,
//     email: req.body.email,
//   };
//   Register.push(user);
//   res.send(user);
// });

// function validate(body) {
//   const schemaForValidation = {
//     name: Joi.string().min(3).required(),
//     email: Joi.string().email({
//       minDomainSegments: 2,
//       tlds: { allow: ["com", "net"] },
//     }),
//   };

//   const result = Joi.validate(body, schemaForValidation);
//   return result;
// }

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
