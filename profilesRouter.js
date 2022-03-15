const express = require("express");
const router = express.Router();

router
  // .get("/profiles", (req, res) => {
  //   res.json({ profiles: [] });
  // })

  .post("/profiles", async (req, res) => {
    const { firstName, lastName, phone, email, bio } = req.body;
    //

    const newProfile = { firstName, lastName, phone, email, bio };
    const savedProfile = await newProfile.save().catch((err) => {
      console.log("Error:", err);
      res.status(500).json({ error: "Cannon register user at the moment!" });
    });

    if (savedProfile) res.json({ message: "Your profile has been added" });
  });

module.exports = { router };
