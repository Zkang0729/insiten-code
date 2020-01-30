const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

require("dotenv").config();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html")),
  );
}

// Define Routes
app.use("/api/companies", require("./routes/companies"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
