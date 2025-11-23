// server.js
// Simple CloudPRNT-style relay for Aldo's kiosk

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check
app.get("/health", (req, res) => {
  res.json({ ok: true, message: "Aldo's CloudPRNT server is running" });
});

// Endpoint where the PRINTER will ask for a job
app.get("/cloudprnt/job", (req, res) => {
  console.log("Printer is asking for a job");

  // For now we send "no job"
  res.json({
    jobAvailable: false
  });
});

// Endpoint where your KIOSK app will send the order
app.post("/cloudprnt/order", (req, res) => {
  console.log("New order from kiosk:");
  console.log(JSON.stringify(req.body, null, 2));

  // Later we will build the ESC/POS ticket here.
  res.json({ ok: true, received: true });
});

// Home
app.get("/", (req, res) => {
  res.send(
    "<h1>Aldo's CloudPRNT Basic</h1><p>Server is running. Use /health to check status.</p>"
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Aldo's CloudPRNT server listening on port ${PORT}`);
});
