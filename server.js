const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/flutterwave-webhook", (req, res, next) => {
  const eventData = req.body;

  // Assuming you're interested in the 'charge.completed' event
  if (eventData.event === "charge.completed") {
    console.log("Charge completed event received:", eventData);

    // Additional processing here. For instance, store in a database, etc.
  } else {
    console.log("Other event received:", eventData);
  }

  // Respond to Flutterwave to acknowledge receipt
  res.status(200).json({ message: "Event received" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
