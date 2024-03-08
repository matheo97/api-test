const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3008;

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from Express API!");
});

// Route to handle incoming requests
app.post("/", (req, res) => {
  console.log("*********************************************");
  console.log("PAYLOAD");
  console.log(req.body);

  // Printing query parameters
  console.log("Query Params:");
  console.log(req.query);

  // Printing 'api-key' from headers
  console.log("API Key:");
  console.log(req.headers["api-key"]);

  res.send(req.body);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
