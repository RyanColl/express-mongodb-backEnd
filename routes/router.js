
const router = require('express').Router();
const Note = require('../mongo/models/noteModel')
const mongodb = require("mongodb");
const database = include('./mongo/connection');
router.get('/', async (req, res) => {
	console.log("page hit");
	try {
		console.log("Test");
        const note = new Note({
            content: 'HTML is Easy',
            date: new Date(),
            important: true,
          })
          
		  await note.save()
		  console.log('note saved')
		res.render('index', {message: "This is Awesome!"});
	}
	catch(ex) {
		res.render('error', {message: 'Error'});
		console.log("Error");
		console.log(ex);
	}
});
module.exports = router;