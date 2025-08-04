const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  referralCode: String,
  donationsRaised: { type: Number, default: 0 }
});

module.exports = mongoose.model('Intern', internSchema);
