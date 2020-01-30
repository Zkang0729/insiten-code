const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  Revenue: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Company", CompanySchema);
