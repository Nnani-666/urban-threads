const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Dummy backend data
const users = [
  { username: "admin", password: "1234" }
];


app.get("/", (req, res) => {
  res.send("UrbanThread Backend is running");
});


app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});


app.post("/register", (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.json({ success: true });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
