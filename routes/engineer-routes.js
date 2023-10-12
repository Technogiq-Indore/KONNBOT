const express = require('express');
const router = express.Router();


/////////////////////////////////////////////home////////////////////////////////
router.get('/engineer-home', (req, res) => {
    // code to fetch engineer details and project information
    const engineerDetails = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      role: 'Engineer'
    };
    const projectInformation = {
      projectName: 'My Project',
      startDate: '2022-01-01',
      endDate: '2022-12-31',
      status: 'In Progress',
      tasks: ['Task 1', 'Task 2', 'Task 3']
    };
    const engineerHomeDetails = {
      engineerDetails,
      projectInformation
    };
    res.json(engineerHomeDetails);
  });
/////////////////////////////////////////////home////////////////////////////////

  //////////////////////////////////project-page////////////////////////////////

  ////////////////////activities////////////////////////////////

  router.get('/project-page', (req, res) => {
    // Your code to retrieve site information goes here
    const siteInfo = {
      name: 'My Site',
      description: 'This is my site',
      url: 'https://example.com'
    };
    res.json(siteInfo);
  });

  
  router.get('/project-page/activities', (req, res) => {
    const siteInfo = {
      name: '/project-page/activities',
      description: 'This is my site',
      url: 'https://example.com'
    };
    res.json(siteInfo);
  });
  
  // API for site information
router.get('/project-page/activities/site-info', (req, res) => {
    // Your code to retrieve site information goes here
    const siteInfo = {
      name: '/project-page/activities/site-info',
      description: 'This is my site',
      url: 'https://example.com'
    };
    res.json(siteInfo);
  });
  
  // API for checklist
  router.get('/project-page/activities/checklist', (req, res) => {
    // Your code to retrieve checklist items goes here
    const checklist = [
      { id: 1, name: 'Item 1', completed: false },
      { id: 2, name: 'Item 2', completed: true },
      { id: 3, name: 'Item 3', completed: false }
    ];
    res.json(checklist);
  });
  
  // API for materials
  router.get('/project-page/activities/materials', (req, res) => {
    // Your code to retrieve materials goes here
    const materials = [
      { id: 1, name: 'Material 1', url: 'https://example.com/material1.pdf' },
      { id: 2, name: 'Material 2', url: 'https://example.com/material2.pdf' },
      { id: 3, name: 'Material 3', url: 'https://example.com/material3.pdf' }
    ];
    res.json(materials);
  });
  
  // API for documents
  router.get('/project-page/activities/documents', (req, res) => {
    // Your code to retrieve documents goes here
    const documents = [
      { id: 1, name: 'Document 1', url: 'https://example.com/document1.pdf' },
      { id: 2, name: 'Document 2', url: 'https://example.com/document2.pdf' },
      { id: 3, name: 'Document 3', url: 'https://example.com/document3.pdf' }
    ];
    res.json(documents);
  });

  ////////////////////activities////////////////////////////////

  ////////////////////schedule////////////////////////////////

  router.get('/project-page/schedule', (req, res) => {
    const siteInfo = {
      name: '/project-page/schedule',
      description: 'schedule page',
      timing:'5-9 without holiday',
      url: 'https://example.com'
    };
    res.json(siteInfo);
  });
  router.get('/project-page/schedule/status', (req, res) => {
    const siteInfo = {
      name: '/project-page/schedule/status',
      description: 'schedule page',
      Status:'completed',
      url: 'https://example.com'
    };
    res.json(siteInfo);
  });
  router.get('/project-page/schedule/what-is-starting', (req, res) => {
    const siteInfo = {
      name: '/project-page/schedule/status',
      description: 'schedule page',
      Status:'completed',
      whatisstarting:'nothing',
      url: 'https://example.com'
    };
    res.json(siteInfo);
  });


    ////////////////////ticket session////////////////////////////////

    router.get('/project-page/ticket-session', (req, res) => {
      const siteInfo = {
        name: '/project-page/ticket-session',
        description: 'ticket session description',
        url: 'https://example.com'
      };
      res.json(siteInfo);
      });

      
module.exports = router;