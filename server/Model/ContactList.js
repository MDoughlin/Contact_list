const mongoose = require('mongoose');

const ContactListSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: Number,
    required: true
  },
  birthday: {
    type: Date,
    required: false
  }
});

const ContactList = mongoose.model('ContactList', ContactListSchema);
module.exports = ContactList;
