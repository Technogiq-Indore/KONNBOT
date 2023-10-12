const express = require('express');
const router = express.Router();

///////////////////////////////////////////////lead page endpoint/////////////////////////////////////////////////
router.get('/lead-page', (req, res) => {
  // Retrieve leads from database or other source
  const leads = [
    { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
    // ...
  ];

  // Send leads as response
  res.json(leads);
});
// Define client enquiries endpoint
router.get('/client-enquiries', (req, res) => {
    // Retrieve client enquiries from database or other source
    const enquiries = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', message: 'I am interested in your services.' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', message: 'Can you provide more information about your products?' },
      // ...
    ];
  
    // Send client enquiries as response
    res.json(enquiries);
  });
  
// Define manual lead creation endpoint
router.post('/add-lead', (req, res) => {
    // Retrieve lead data from request body
    const { name, email, phone } = req.body;
  
    // Save lead to database or other source
    // ...
  
    // Send success response
    res.json({ success: true });
  });


// Define status update endpoint
router.put('/leads/:leadId/status', (req, res) => {
    // Retrieve lead ID from URL parameter
    const leadId = req.params.leadId;
  
    // Retrieve updated status from request body
    const { status } = req.body;
  
    // Update lead status in database or other source
    // ...
  
    // Send success response
    res.json({ success: true });
  });


  // Define search endpoint
router.get('/leads/search', (req, res) => {
    // Retrieve search query from URL parameter
    const query = req.query.q;
  
    // Search leads in database or other source based on query
    const results = [
      { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
      { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
      // ...
    ];
  
    // Send search results as response
    res.json(results);
  });

  
  // Define filter endpoint
router.get('/leads/filter', (req, res) => {
    // Retrieve filter criteria from URL parameters
    const { status, source } = req.query;
  
    // Filter leads in database or other source based on criteria
    const results = [
      { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'New', source: 'Website' },
      { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', status: 'Contacted', source: 'Referral' },
      // ...
    ].filter(lead => {
      if (status && lead.status !== status) {
        return false;
      }
      if (source && lead.source !== source) {
        return false;
      }
      return true;
    });
  
    // Send filtered leads as response
    res.json(results);
  });
////////////////////////////////////////////// add lead page endpoint///////////////////////////////////////////////
router.post('/add-lead', (req, res) => {
    // Retrieve lead data from request body
    const { name, email, phone } = req.body;
  
    // Save lead to database or other source
    // ...
  
    // Send success response
    res.json({ success: true });
  });



  /////////////////////////////////// open lead page endpoint//////////////////////////////////////////
router.get('/lead-page/:leadId', (req, res) => {
    // Retrieve lead ID from URL parameter
    const leadId = req.params.leadId;
  
    // Retrieve lead details from database or other source
    const lead = { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' };
  
    // Send lead details as response
    res.json(lead);
  });

  

  ////////////////////////////////// ticket system endpoint//////////////////////////////////
router.get('/tickets', (req, res) => {
    // Retrieve tickets from database or other source
    const tickets = [
      { id: 1, subject: 'Issue with login', status: 'Open' },
      { id: 2, subject: 'Billing question', status: 'Closed' },
      // ...
    ];
  
    // Send tickets as response
    res.json(tickets);
  });
  
  /////////////////////////////////ticket details endpoint/////////////////////////////////////////
  router.get('/tickets/:ticketId', (req, res) => {
    // Retrieve ticket ID from URL parameter
    const ticketId = req.params.ticketId;
  
    // Retrieve ticket details from database or other source
    const ticket = { id: 1, subject: 'Issue with login', status: 'Open', description: 'I cannot log in to my account.' };
  
    // Send ticket details as response
    res.json(ticket);
  });
  
  // Define ticket update endpoint
  router.put('/tickets/:ticketId', (req, res) => {
    // Retrieve ticket ID from URL parameter
    const ticketId = req.params.ticketId;
  
    // Retrieve updated ticket data from request body
    const { status } = req.body;
  
    // Update ticket status in database or other source
    // ...
  
    // Send success response
    res.json({ success: true });
  });
module.exports = router;