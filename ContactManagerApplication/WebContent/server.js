var express = require('express');


var app = express();

app.configure(function () {
    app.use(express.bodyParser());
});

var contacts = {
		
}


app.use(express.static(__dirname));


// list of contacts
app.get('/contacts', function(req, res) {
    var contactInArray = [];
    for (var contactId in contacts){
        contactInArray.push(contacts[contactId])
    }
    res.send({contacts:contactInArray});
});


app.get('/contacts/:id', function(req, res) {
    res.send({contact:contacts[req.params.id]});
});


// new contact
app.post('/contacts', function(req, res) {
    if (!!req.body.contact.id && contacts[req.body.contact.id] == null){
        contacts[req.body.contact.id] = req.body.contact;
        res.send("ok");
    }
    res.send("not ok");
});


// update contact
app.put('/contacts/:id', function(req, res) {
    if (!!req.body.contact.id && contacts[req.body.contact.id] != null){
        contacts[req.body.contact.id] = req.body.contact;
        res.send("ok");
    }
    res.send("not ok");
});

//delete contact
app.delete('/contacts/:id', function(req, res) {
    if (!!req.params.id && contacts[req.params.id] != null){
        delete contacts[req.params.id];
        res.send("ok");
    }
    res.send("not ok");
});


app.listen(3000);
console.log('Listening on port 3000...');