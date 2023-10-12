// routes/auth.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require("../model/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const twilio = require('twilio');
const bodyParser = require('body-parser');
const connection=require('../database/db');
//////////////////////////GLOBAL VARIABLE FOR TEMPERORY STORAGE //////////////////////////////////
var storage ={
  gen_otp: '00000',
  phone:'00000000'  
}
//////////////////////////GLOBAL VARIABLE FOR TEMPERORY STORAGE //////////////////////////////////




// Register Route
router.get('/register', (req, res) => {
  // Render the registration form
});


// user registration  
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
 
    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({ message: 'Email is already in use.' });
    }

    const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);


    const newUser = new User({
      name,
      email,
      password: hashedPassword, 
    });


    await newUser.save();

    const token = jwt.sign({ email: newUser.email }, 'yourSecretKey', { expiresIn: '1h' });

    return res.status(201).json({ message: 'Registration successful.', token });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});
    


// Login Route
router.get('/login', (req, res) => {
  // Render the login form
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email)
  console.log(password)
  try {

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

const isPasswordValid = await bcrypt.compare(password, user.password);

if (isPasswordValid) {
  // Password is valid
  const token = jwt.sign({ userId: user._id }, 'secretKey');
  res.json({ message: 'Login successful', token });
} else {
  // Password is invalid
  res.status(401).json({ message: 'Invalid email or password' });
}

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Logout Route
router.get('/logout', (req, res) => {
  // Handle logout logic here
  // Redirect to the login page
});



/////////////////////////////////////////////FORGOT ROUTES/////////////////////////////////////////////


// Twilio credentials
// const accountSid = 'YOUR_ACCOUNT_SID';
// const authToken = 'YOUR_AUTH_TOKEN';
// const client = twilio(accountSid, authToken);

// mysql2 credentials
// const connection = mysql2.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'technogiq@123',
//   database: 'konnbot'
// });

// Middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Forgot password API endpoint
router.post('/forgot-password', (req, res) => {
  const phoneNumber = req.body.phone;

  // Generate OTP
  const otp = Math.floor(1000 + Math.random() * 9000);
  console.log(otp)
  // Generate token
  const token = Math.random().toString(36).substr(2, 4);

  // Store verification details in database
  const sql = `INSERT INTO verification_details (phone, otp, token) VALUES ('${phoneNumber}', '${otp}', '${token}')`;
  connection.query(sql, (error, results) => {
    if (error) throw error;

    // Send OTP via SMS
    // client.messages.create({
    //   body: `Your OTP is ${otp}`,
    //   from: 'YOUR_TWILIO_phone',
    //   to: `+${phoneNumber}`
    // }).then(message => console.log(message.sid));

    // Redirect to verify OTP page with token
    res.redirect(`/verify-otp?${token}`);
    // res.send("done");
  });
});



// Verify OTP API endpoint
router.post('/verify-otp', (req, res) => {
  const token = req.body.token;
  console.log(token);
  const enteredOtp = req.body.otp;

  // Query verification details by token
  const sql = `SELECT * FROM verification_details WHERE token = '${token}'`;
  connection.query(sql, (error, results) => {
    if (error) throw error;

    // Check if OTP matches
    if (results[0].otp === enteredOtp) {
      // Redirect to change password page with token
      // res.send("done otp")
      res.redirect(`/change-password?token=${token}`);
    } else {
      res.send('Invalid OTP');
    }
  });
});
// Change password API endpoint
router.post('/change-password', (req, res) => {
  const token = req.query.token;
  const newPassword = req.body.new_password;

  // Query verification details by token
  const sql = `SELECT * FROM verification_details WHERE token = '${token}'`;
  connection.query(sql, (error, results) => {
    if (error) throw error;

    // Update password in database
    const phoneNumber = results[0].phone;
    const updateSql = `UPDATE users SET password = '${newPassword}' WHERE phone = '${phoneNumber}'`;
    connection.query(updateSql, (error, results) => {
      if (error) throw error;

      // Delete verification details from database
      const deleteSql = `DELETE FROM verification_details WHERE token = '${token}'`;
      connection.query(deleteSql, (error, results) => {
        if (error) throw error;

        // Redirect to login page
        res.redirect('/login');
      });
    });
  });
});

/////////////////////////////////////////////FORGOT ROUTES/////////////////////////////////////////////



module.exports = router;
