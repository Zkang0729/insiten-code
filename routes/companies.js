const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Company = require("../models/Company");

// @route       GET api/companies
// @desc        Get all companies
router.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       GET api/companies/:id
// @desc        Get a specific company
router.get("/:_id", async (req, res) => {
  try {
    const company = await Company.findById(req.params._id);
    if (!company) return res.status(404).json({ msg: "Company not found." });
    res.json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       Get api/companies?q=:text
// @desc        Get companies with keywords
router.get("/?q={text}", async (req, res) => {
  try {
    const companies = await Company.find(req.params.text);
    res.json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST api/companies
// @desc        Add a company
router.post(
  "/",
  [
    check("Name", "Name is required.")
      .not()
      .isEmpty(),
    check("Status", "Status is required.")
      .not()
      .isEmpty(),
    check("Revenue", "Revenue is required.")
      .not()
      .isEmpty(),
    check("Location", "Location is required.")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { Name, Status, Revenue, Location } = req.body;
    try {
      const newCompany = new Company({
        Name,
        Status,
        Revenue,
        Location,
      });
      const company = await newCompany.save();
      res.json(company);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
);

// @route       PUT api/companies/:id
// @desc        Update a company
router.put(
  "/:_id",
  [
    check("Name", "Name is required.")
      .not()
      .isEmpty(),
    check("Status", "Status is required.")
      .not()
      .isEmpty(),
    check("Revenue", "Revenue is required.")
      .not()
      .isEmpty(),
    check("Location", "Location is required.")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { Name, Status, Revenue, Location } = req.body;
    // Build company object
    const companyFields = {};
    if (Name) companyFields.Name = Name;
    if (Status) companyFields.Status = Status;
    if (Revenue) companyFields.Revenue = Revenue;
    if (Location) companyFields.Location = Location;
    try {
      let company = await Company.findById(req.params._id);
      if (!company) return res.status(404).json({ msg: "Company not found." });
      company = await Company.findByIdAndUpdate(
        req.params._id,
        { $set: companyFields },
        { new: true },
      );
      res.json(company);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
);

// @route       DELETE api/companies/:id
// @desc        Delete a company
router.delete("/:_id", async (req, res) => {
  try {
    let company = await Company.findById(req.params._id);
    if (!company) return res.status(404).json({ msg: "Company not found" });
    await Company.findByIdAndRemove(req.params._id);
    res.json({ msg: "Company removed!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
