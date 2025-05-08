const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Donation = require('./models/donation');

const app = express();
app.use(cors({
  origin: 'https://your-frontend.vercel.app' // replace with your actual Vercel URL
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.post('/api/donate', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json({ message: 'Donation saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving donation', error: err });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
