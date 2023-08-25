const express = require("express");
const router = express.Router();
const ContactList = require("./Models/ContactList");

router.get("/", (req, res) => {
  res.send("Hello, World Bread");
});

router.post('/add-contact', async (req, res) => {
  const contact = new ContactList(req.body);
  try {
    await contact.save();
    res.status(201).json({
      status: 'Success',
      data: {
        contact
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err
    });
  }
});
module.exports = router;
