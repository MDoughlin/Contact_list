const express = require("express");
const router = express.Router();
const ContactList = require("./Models/ContactList");

router.get("/contacts", async (req, res) => {
  const contacts = await ContactList.find({});
  try {
    res.status(200).json({
      status: 'Success',
      data: {
        contacts
      }

    });
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err
    });
  }
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

router.patch('/update-contact/:id', async (req, res) => {
  const updatedContact = await ContactList.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  try {
    res.status(200).json({
      status: 'Success',
      data: {
        updatedContact
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.delete('delete-phone/:id', async (req, res) => {
  await ContactList.findByIdAndDelete(req.params.id);

  try {
    res.status(204).json({
      status: 'Success',
      data: {}
    });
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err
    });
  }
});
