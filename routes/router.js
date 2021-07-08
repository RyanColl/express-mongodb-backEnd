
const router = require('express').Router();
const Note = require('../mongo/models/noteModel')
const mongodb = require("mongodb");
const database = include('./mongo/connection');
// just a test and role model for other routes
router.get('/test', async (req, res) => {
	console.log("page hit");
	try {
		console.log("Test");
        // const note = new Note({
        //     content: 'HTML is Easy',
        //     date: new Date(),
        //     important: false,
        //   })
          
		//   await note.save()
		  console.log('note saved')
		res.render('index');
	}
	catch(ex) {
		res.render('error', {message: 'Error'});
		console.log("Error");
		console.log(ex);
	}
});


// finds all the notes and returns as foundNotes in json format for api requests
router.get('api/notes', async (req, res) => {
	const foundNotes = await Note.find({})
	console.log(foundNotes)
	res.json(foundNotes)
})
app.get('/api/notes/:id', async (request, response) => {
	const id = Number(request.params.id)
	const note =  await Note.findOne({ _id: req.query.id })
	if (note) {
		response.json(note)
	  } else {
		response.status(404).end()
	  }
  })
router.post('api/notes', async (req, res) => {
	const body = req.body
      
    if (!body.content) {
        return res.status(400).json({ 
        	error: 'content missing' 
        })
    }
	let note = new Note({
		content: body.content,
		important: body.important || false,
		date: new Date()
	})
	await note.save()
	console.log('note saved')
})


module.exports = router;