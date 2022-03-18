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
    console.log(req.body);

    try {
      try {
        const errorMessage = new Object();

        if (!(req.body.firstName.length <= 15)) {
          errorMessage.firstName =
            "First name must contain 15 characters or less";
        }

        if (!(req.body.lastName.length <= 20)) {
          errorMessage.lastName =
            "Last name must contain 15 characters or less";
        }

        if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(req.body.phone)) {
          errorMessage.phone = "Phone must start with + and contain 12 numbers";
        }

        if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)
        ) {
          errorMessage.email =
            "Email must include the username, an @ symbol, domain name, a dot, and the domain";
        }

        if (!(req.body.bio.length <= 200)) {
          errorMessage.bio = "Bio must contain no more than 200 characters";
        }

        if (Object.keys(errorMessage).length > 0) {
          res
            // This status
            .status(400)
            .json({ status: "fail", code: 400, error: { errorMessage } });
        }
      } catch (error) {
        console.error(error.message);
        // throw error;
        // next(error);
      }

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
      console.error(error.message);
    }
  });

app.use((req, res) => {
  res.status(404).json({ status: "error", code: 404, message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ status: "fail", code: 500, message: err.message });
});
