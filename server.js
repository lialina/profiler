// console.log("Сервер работает:)");
const express = require("express");
const morgan = require("morgan");
const app = express();

const { router } = require("./profilesRouter");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(router);

app.post("/home", (req, res) => {
  res.json({
    message: "Home",
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at server launch:", err);
  }
  console.log("Сервер работает:) PORT 3001");
});
