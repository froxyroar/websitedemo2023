const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define your API endpoint
app.get('/api/members', (req, res) => {
  const members = [
    {
      name: 'Adam Wisnu P.',
      role: 'Backend',
      github: 'adamwisnup',
      instagram: 'adam_wisnup',
      linkedin: 'adamwisnup',
    },
    {
      name: 'Raihan Putra D.',
      role: 'Backend',
      github: 'raiputradrmwn',
      instagram: 'rai.drmwn',
      linkedin: 'raihanputrad',
    },
    {
      name: 'Muhardian Fatih',
      role: 'Frontend',
      github: 'muhardiann',
      instagram: 'muhardianf',
      linkedin: 'muhardianf',
    },
    {
      name: 'Rifki Rosada',
      role: 'Frontend',
      github: 'froxyroar',
      instagram: 'kuuhaku_riro',
      linkedin: 'rifki-rosada-a8569125a',
    },
  ];

  res.json(members);
});

// All other routes will be handled by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
