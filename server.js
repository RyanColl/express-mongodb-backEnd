global.base_dir = __dirname;
global.abs_path = function(path) {
	return base_dir + path;
}
global.include = function(file) {
	return require(abs_path('/' + file));
}



const express = require('express');
const router = include('routes/router');
const cors = require('cors')



const port = process.env.PORT || 3000;


const app = express();
app.set('view engine', 'ejs');
app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.static('build'))
app.use(express.json())
app.use('/', router);

app.listen(port, () => {
	console.log("Node application listening on port "+port);
}); 