const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	console.log(req.body);
		const nodemailer    = require('nodemailer'),
					smtpTransport = require('nodemailer-smtp-transport'),
					transport     = nodemailer.createTransport(smtpTransport({
						host: 'smtp.jokula.is',
						port: 25,
						auth: {
							user: 'rames@jokula.is',
							pass: 'S8KX7C5q'
						},
		}));

		transport.sendMail({
			from : req.body.email,
			from : 'rames@jokula.is',
			to : 'svennidal@jokula.is',
			//to : 'bjarnileifs@ru.is',
			subject : 'Fyrirspurn af Rames',
			text : `Name: ${req.body.name}
Email: ${req.body.email}
Subject: ${req.body.subject}
Message : ${req.body.message}`
		}, (error, response) => {
			if(error){
				console.error('error', error);
				res.send('Error sending mail');
			} else {
				console.log('ok sending mail >> rames');
				res.send('Success sending email');
			}
		});
});

module.exports = router;
