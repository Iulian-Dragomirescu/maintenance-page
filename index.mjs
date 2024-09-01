import express from "express";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get("/", (req, res) => {
  // Retry-After 2 hours
  res.set("Retry-After", 7200);
  res.status(503).sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
