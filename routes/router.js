
const router = require('express').Router();
const Note = require('../mongo/models/noteModel')
const Num = require('../mongo/models/numberModel')
const mongodb = require("mongodb");
const database = include('./mongo/connection');
// just a test and role model for other routes
router.get('/test', async (req, res) => {
	console.log("page hit");
	try {
		console.log("Test");
        const num = new Num({
            name: 'Ryan',
			number: 6047618865,
            date: new Date(),
          })
          
		  await num.save()
		  console.log('note saved')
		res.render('index');
	}
	catch(ex) {
		res.render('error', {message: 'Error'});
		console.log("Error");
		console.log(ex);
	}
});


// finds all the numbers and returns as foundNumbers in json format for api requests
router.get('/api/numbers', async (req, res) => {
	const foundNumbers = await Num.find({})
	console.log(foundNumbers)
	res.json(foundNumbers)
})
router.get('/api/numbers/:id', async (request, response) => {
	const id = Number(request.params.id)
	const num =  await Num.findOne({ _id: id })
	if (num) {
		response.json(num)
	  } else {
		response.status(404).end()
	  }
  })
router.post('/api/numbers', async (req, res) => {
	const body = req.body
    if (!body.name || !body.number) {
        return res.status(400).json({ 
        	error: 'content missing' 
        })
    }
	let num = new Num({
		name: body.name,
		number: body.number,
		date: new Date()
	})
	await num.save()
	console.log('note saved')
	// console.log('function passed');
})

router.delete('/api/numbers/:id', async (req, res) => {
	const id = Number(req.params.id)
	await Num.deleteOne({ _id: id })
	console.log('deleted')
})


module.exports = router;