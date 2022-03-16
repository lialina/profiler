const app = require("../app");

const PORT = process.env.PORT || 3001;

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at server launch:", err);
  }
  console.log(`App listening at port: ${PORT} :)`);
});
