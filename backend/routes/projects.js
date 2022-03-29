//routing for projects
const router = require('express').Router();
let Project = require('../models/project.js');

router.route('/').get((req, res) => {
    Session.find().then((projects) => res.json(projects)).catch((error) => res.status(400).json('Error: ' + error));
}); 

router.route('/create/').post((req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const tags = req.body.tags;
    
    const project = new Session({title, body, tags});
    project.save().then(() => res.json('Created Project')).catch((error) => res.status(400).json('Error: ' + error));
});

module.exports = router;