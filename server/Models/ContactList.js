const mongoose = require("mongoose");


const ContactListSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  birthday: {
    type: Date,

  }
});
const ContactList = mongoose.model('ContactList', ContactListSchema);
module.exports = ContactList;
