var app = require('express')();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var cors = require('cors');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtp://smtp.gmail.com');

app.use(bodyParser.urlencoded());
app.use(cors());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/message', jsonParser, function(req, res) {
	nom = req.body['name'];
	email = req.body['email'];
	contenu = req.body['message'];

	var smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "melanieboussat@gmail.com",
            pass: "Pititbou"
        }
    });

	var mailOptions = {
	    from: '"Melanie Boussat"', // sender address
	    to: 'melanieboussat@gmail.com', // list of receivers
	    subject: 'Nouveau message', // Subject line
	    html: '<b>Nom : </b>' + nom + '<br /><b>Email : </b>' + email + '<br /><b>Contenu : </b>' + contenu// html body
	};

	// send mail with defined transport object
	smtpTransport.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});

	res.json({success: true});
});

app.listen(8080, function() {
	console.log("Listening 8080");
});