import express from "express";

const app = express();

app.post("/usuarios", (req, res) => {
  console.log(req.body);

  res.send("OK");
});

app.get("/usuarios", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
console.log("Server is running on port 3000");
