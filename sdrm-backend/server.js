const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'San Diego Rescue Mission Outreach API' });
});

app.get('/api/outreach-services', (req, res) => {
  res.json({
    services: [
      {
        id: 1,
        name: 'Street Engagement',
        description: 'Direct contact with unsheltered individuals to build trust and offer assistance',
        icon: '🤝'
      },
      {
        id: 2,
        name: 'Resource Navigation',
        description: 'Connecting individuals to shelters, healthcare, and essential services',
        icon: '🧭'
      },
      {
        id: 3,
        name: 'Crisis Intervention',
        description: 'Immediate support during mental health or substance use crises',
        icon: '🆘'
      },
      {
        id: 4,
        name: 'Mobile Hygiene Services',
        description: 'Showers, clean clothes, and hygiene supplies through our mobile unit',
        icon: '🚿'
      },
      {
        id: 5,
        name: 'Food & Water Distribution',
        description: 'Regular distribution of meals, water, and snacks at encampments',
        icon: '🍞'
      },
      {
        id: 6,
        name: 'Housing First Advocacy',
        description: 'Rapid rehousing assistance and permanent supportive housing connections',
        icon: '🏠'
      }
    ]
  });
});

app.get('/api/contact', (req, res) => {
  res.json({
    address: 'P.O. Box 80427, San Diego, CA 92138',
    phone: '(619) 687-3720',
    email: 'sdrminfo@sdrescue.org',
    website: 'https://www.sdrescue.org'
  });
});

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});