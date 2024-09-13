const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/newsletter', (req, res) => {
  const { email } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    port: 465, 
    secure: true,
    
    auth: {
      user: '2118pankaj.kumar@gmail.com',
      pass: ')(*&^%$#@!',
    },
  });

  // Define the email options
  const mailOptions = {
    from: '2118pankaj.kumar@gmail.com',
    to: email,
    subject: 'Subscription Confirmation',
    text: 'Thank you for subscribing to our newsletter!',
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Subscription successful');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
