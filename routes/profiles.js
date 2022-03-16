const express = require("express");
const router = express.Router();
const Profiles = require("../model");

router
  .get("/", async (req, res, next) => {
    console.log("My profiles");
    try {
      const profiles = await Profiles.profilesList();
      res.json({ status: "succeess", code: 200, data: { profiles } });
    } catch (error) {
      next(error);
    }
  })

  .post("/", async (req, res, next) => {
    try {
      const profile = await Profiles.addProfile(req.body);
      res
        .status(201)
        .json({ status: "succeess", code: 201, data: { profile } });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
