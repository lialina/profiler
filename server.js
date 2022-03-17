const express = require("express");
const logger = require("morgan");
const crypto = require("crypto");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at server launch:", err);
  }
  console.log(`App listening at port: ${PORT} :)`);
});

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(express.json());
app.use(logger(formatsLogger));

let profiles = [];

app
  .get("/profiles", async (req, res, next) => {
    console.log("My profiles");
    try {
      res.json({ status: "success", code: 200, data: { profiles } });
    } catch (error) {
      next(error);
    }
  })

  .post("/profiles", async (req, res, next) => {
    try {
      console.log(req.body);
      const newProfile = {
        id: crypto.randomUUID(),
        ...req.body,
      };
      profiles.push(newProfile);
      res
        .status(201)
        .json({ status: "success", code: 201, data: { newProfile } });
    } catch (error) {
      next(error);
    }
  });

app.use((req, res) => {
  res.status(404).json({ status: "error", code: 404, message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ status: "fail", code: 500, message: err.message });
});
