const express = require("express");
const { check, query, body, param, validationResult } = require('express-validator');

//const cors = require('cors');

const bodyParser = require('body-parser');
const mariadb = require("mariadb");

const app = express();
const port = 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Still don't know what this does
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

const pool = mariadb.createPool({
	host: '127.0.0.1',
	user: 'darre',
	password: 'tempPass',
	database: 'testBoard',
	connectionLimit: 5
})

/* An Export I copied. idk what imma do with it yet. don't fully understand exports/middlewares in express yet
module.exports = function(req, res, next) {
    const message = {};
    message.body = req.responseObject;
    message.success = true;
    message.status = req.responseStatus || 200;
    res.status(message.status).send(message);
    return next();
}*/

app.get("/", (req, res) => {
	pool.getConnection()
	.then((conn) => {
		conn.query("select * from prayers")
		.then((rows) => {
			res.send("Connected to the backend. Database Connected. Database assumed to be Configured.");
			conn.end();
		})
		.catch(err => {
			console.log(err);
			conn.end();
			res.send("Connected to the backend. Database Connected. Database not Configured.")
		})
	})
	.catch(err => {
		console.log(err);
		res.send("Connected to the backend. Database not Connected.")
	});
});


app.get("/prayers", (req, res) => {
	pool.getConnection()
	.then((conn) => {
		conn.query("SELECT prayers.id, users.name, title, description, prayers.dateCreated from prayers left join users on prayers.uid = users.id;")
		.then((rows) => {
			res.send(rows);
			conn.end();
		})
		.catch(err => {
			console.log(err);
			conn.end();
		})
	})
	.catch(err => {
		console.log(err);
	});
});

app.get("/numprayers", (req, res) => {
	pool.getConnection()
	.then((conn) => {
		conn.query("SELECT count(*) as numprayers from prayers;")
		.then((rows) => {
			rows[0]['numprayers'] = parseInt(rows[0]['numprayers'].toString(), 10);
			res.send(rows);
			conn.end();
		})
		.catch(err => {
			console.log(err);
			conn.end();
		})
	})
	.catch(err => {
		console.log(err);
	});
});

app.get("/numtestimonies", (req, res) => {
	pool.getConnection()
	.then((conn) => {
		conn.query("SELECT count(*) as numtestimonies from testimonies;")
		.then((rows) => {
			rows[0]['numtestimonies'] = parseInt(rows[0]['numtestimonies'].toString(), 10);
			res.send(rows);
			conn.end();
		})
		.catch(err => {
			console.log(err);
			conn.end();
		})
	})
	.catch(err => {
		console.log(err);
	});
});

app.post('/createuser', [
	check('name').notEmpty(),
	check('loginID').notEmpty().trim(),
	check('password').notEmpty().trim(),
	check('email').notEmpty().isEmail().normalizeEmail()
], (req, res) => {

	const result = validationResult(req);

	if(result.isEmpty()) {
		console.log(req.body.name);

		// create user object from
		var values = [
			"Daran",
			"Darre",
			"Daran2011",
			"daran.parkman@gmail.com"
		]


		// send data to database
		pool.getConnection()
		.then((conn) => {
			conn.query('INSERT INTO users (name, username, password, email) VALUES (?, ?, ?, ?)', 
			values, 
			function(err, result)
			{
				if (!err) {res.send(values); }
				else {throw err;}
			})
			.then((res) => {
				// DO SOMETHING WITH RESPONSE
				conn.end();
			})
			.catch(err => {
				console.log(err);
				conn.end();
			})
		})
		.catch(err => {
			console.log(err);
		})
	}
	else {
		console.log(result);
	}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});