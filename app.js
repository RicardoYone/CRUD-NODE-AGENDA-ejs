const { json } = require("express");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express(json));

app.use("/", require("./router"));

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
