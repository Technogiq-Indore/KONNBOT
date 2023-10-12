const express = require('express');
const router = express.Router();

/////////////////////////////////////////////////home page////////////////////////////////////////////////////////////////
router.get('/client-home', (req, res) => {
  const clientDetails = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    role: 'client'
  };
  const projectInformation = {
    projectName: 'My Project',
    startDate: '2022-01-01',
    endDate: '2022-12-31',
    status: 'In Progress',
    tasks: ['Task 1', 'Task 2', 'Task 3']
  };
  const clientHomeDetails = {
    clientDetails,
    projectInformation
  };
  res.json(clientHomeDetails);
  });

// Define project information endpoint
  router.get('/project-information', (req, res) => {
    
    const projectInfo = {
      projectName: 'My Project',
      projectDescription: 'This is a description of my project',
      projectManager: 'John Doe',
      projectStatus: 'In Progress'
    };
    res.json(projectInfo);
  });



// Define about Konnbot endpoint
  router.get('/about-konnbot', (req, res) => {
    const konnbotInfo = {
      name: 'Konnbot',
      description: 'Konnbot is an AI chatbot designed to help businesses improve their customer service and engagement.',
      features: ['Natural language processing', '24/7 availability', 'Customizable responses']
    };
    res.json(konnbotInfo);
  });

// Define functionality endpoint
  router.get('/functionality', (req, res) => {
 
    const functionalityInfo = {
      feature1: 'Automated responses to frequently asked questions',
      feature2: 'Live chat with customer support agents',
      feature3: 'Integration with social media platforms'
    };

    res.json(functionalityInfo);
  });
// Define project testimony endpoint
  router.get('/project-testimony', (req, res) => {

    const projectTestimony = {
      customerName: 'Jane Doe',
      testimony: 'Konnbot has been a game-changer for our business. Our customers love the quick and helpful responses they receive from the chatbot.'
    };

    res.json(projectTestimony);
  });

//Define dynamic calculator endpoint
  router.get('/dynamic-calculator/:num1/:num2', (req, res) => {

    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    const result = num1 + num2;
  
    // Send result as response
    res.send(`The result of ${num1} + ${num2} is ${result} just for example purposes.`);
  });



// Define customer feedback endpoint
   router.post('/customer-feedback', (req, res) => {
 
    const feedback = req.body.feedback;
    console.log(feedback);

    res.send(` ${feedback}  Thank you for your feedback!`);
  });
  

///////////////////////////////////////////////////enquiry information///////////////////////////////////////////////////


router.get('/enquiry-information', (req, res) => {
    
    res.send('/enquiry-information page is working')
});


// Define project status endpoint
router.get('/project-status', (req, res) => {
    const projectStatus = {
      status: 'In Progress',
      startDate: '2022-01-01',
      endDate: '2022-06-30'
    };
    res.json(projectStatus);
  });

// Define priority and other information endpoint
router.get('/priority-and-other-info', (req, res) => {

    const priorityAndOtherInfo = {
      priority: 'High',
      budget: 100000,
      teamSize: 5
    };
  
    res.json(priorityAndOtherInfo);
  });

// Define unit and area's endpoint
router.get('/unit-and-areas', (req, res) => {
    const unitAndAreas = {
      unit1: {
        area: 1000,
        rooms: 3,
        bathrooms: 2
      },
      unit2: {
        area: 800,
        rooms: 2,
        bathrooms: 1
      }
    };
    res.json(unitAndAreas);
  });


  // Define building type endpoint
router.get('/building-type', (req, res) => {
    const buildingType = {
      type: 'Residential',
      floors: 5,
      unitsPerFloor: 4
    };
  
    res.json(buildingType);
  });


// Define basement information endpoint
router.get('/basement-information', (req, res) => {

    const basementInfo = {
      hasBasement: true,
      basementArea: 500,
      basementRooms: 2
    };
    res.json(basementInfo);
  });



//////////////////////////////////////////////timeline-sheet/////////////////////////////////////////////////////


router.get('/timeline-sheet', (req, res) => {
    
    res.send('/timeline-shee is working properly. ')
});






//////////////////////////////////////////////project-info/////////////////////////////////////////////////////
router.get('/project-info', (req, res) => {
    const temp={
      name: 'Project A',
      status: 'In Progress',
      startDate: '2022-01-01',
      endDate: '2022-06-30'
    }
    res.send(temp)
});


// Define ongoing projects endpoint
router.get('/ongoing-projects', (req, res) => {
    const ongoingProjects = [
      {
        name: 'Project A',
        status: 'In Progress',
        startDate: '2022-01-01',
        endDate: '2022-06-30'
      },
      {
        name: 'Project B',
        status: 'In Progress',
        startDate: '2022-02-01',
        endDate: '2022-07-31'
      }
    ];
    res.json(ongoingProjects);
  });


  
// Define completed projects endpoint
router.get('/completed-projects', (req, res) => {
    const completedProjects = [
      {
        name: 'Project C',
        status: 'Completed',
        startDate: '2021-01-01',
        endDate: '2021-06-30'
      },
      {
        name: 'Project D',
        status: 'Completed',
        startDate: '2021-02-01',
        endDate: '2021-07-31'
      }
    ];
    res.json(completedProjects);
  });
  

//////////////////////////////////////////////dynamic-calculator /////////////////////////////////////////////////////
router.get('/dynamic-calculator', (req, res) => {
    
    res.send('dynamic-calculator has been implemented and will be integrated afterwards as per requirements'); 
});




//////////////////////////////////////////////quotation-page/////////////////////////////////////////////////////
router.get('/quotation-page', (req, res) => {
    
    res.send('/quotation-page is working properly')
});




//////////////////////////////////////////////ticket-page/////////////////////////////////////////////////////
router.get('/ticket-page', (req, res) => {
    const ticket={
      tiketid:'1001',
      ticketprice:'5000/-'
    }
    res.send(ticket)
});

// Define queries ticket endpoint
router.get('/queries-ticket', (req, res) => {
    const queriesTicket = [
      {
        id: 1,
        title: 'Query 1',
        description: 'This is query 1'
      },
      {
        id: 2,
        title: 'Query 2',
        description: 'This is query 2'
      }
    ];
    res.json(queriesTicket);
  });


// Define project queries status endpoint
router.get('/project-queries-status', (req, res) => {
    const projectQueriesStatus = [
      {
        projectId: 1,
        status: 'In Progress',
        queriesCount: 5
      },
      {
        projectId: 2,
        status: 'Completed',
        queriesCount: 10
      }
    ];
    res.json(projectQueriesStatus);
  });


// Define add/update endpoint
router.post('/add-update', (req, res) => {
  const data = req.body;


    res.json(data);
  });

// Define add ticket endpoint
router.post('/add-ticket', (req, res) => {
    // Retrieve data from request body
    const { title, description, projectId } = req.body;
  
    // Save data to database or other source
  
    // Send success response
    res.json({ success: true });
  });




//////////////////////////////////////////////installation-page/////////////////////////////////////////////////////
router.get('/installation-page', (req, res) => {
    
    res.send('/installation-page')
  });

  module.exports = router;