const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, CI/CD with GitHub Actions and Docker!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
