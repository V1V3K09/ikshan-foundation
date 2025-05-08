const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  donor_name: String,
  pan: String,
  aadhaar: String,
  employer: String,
  dob: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  gender: String,
  mobile: String,
  email: String,
  donation_amount: Number,
  support_causes: String,
  other_initiative: String,
  feedback: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', DonationSchema);
