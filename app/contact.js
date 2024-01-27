const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const _= require('lodash');
const mongoose = require('mongoose');
const app=express();
app.use(express.static(__dirname+"/Public"));
app.use(bodyParser.urlencoded({extended:true}));

main().catch(err => console.log(err));



////////////////////////////////////mongoose functions
async function main() {
  await mongoose.connect('mongodb+srv://admin-halehesmaeiligci:wRhOx61rKYvBl7Wn@cluster0.4dh23y9.mongodb.net/PasstilliosContacters');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
async function findCategoryBasedPosts(modul,category){
const response=  await modul.find({"category":category});
return response;
}
async function findID(modul,id) {
const response=  await modul.findById(id);
console.log(response);
return response;
}
async function find(modul) {
  //console.log(modul);
const response=  await modul.find({});
//const result=resolve_promise(response);
//console.log("result"+result);
return response;
}
/*
UserSchema.path('email').validate(function (email) {
   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   return emailRegex.test(email.text); // Assuming email has a text attribute
}, 'The e-mail field cannot be empty.')
*/
//////////// gitbash:  cd /c/Users/haleh/OneDrive/Desktop/Udemy/Web-Dev/ejs-challenge
///////update:I corrected the about and contact page...this file may need checking for robostness when data was not found ..in home posts ecs...
//////////////////////////mongoose function-section end here.....schemas
const ContactSchema={
  vorname:String,
  nachname:String,
  email:{
    type:  String,
    required:true
  },

  text:String
}
const Contact=mongoose.model("Contact",ContactSchema);
app.get("/success",function (req,res) {
  res.sendFile(__dirname+"/success.html");
});

app.get("/failure",function (req,res) {
  res.sendFile(__dirname+"/failure.html");
});
app.get("/",function (req,res) {
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function (req,res) {

const email= req.body.e_mail;
const vorname=req.body.vorname;
const nachname=req.body.nachname;
const text=req.body.subscriber_txt;
const contact=new Contact({
vorname:vorname,
nachname:nachname,
email:email,
text:text
});
//contact.save();
const data={
  members: [
      {
        email_address:email,
        status: "subscribed",
        merge_fields: {
          FNAME: vorname,
          LNAME:nachname
        }
      }]};

const flat_data=JSON.stringify(data);
const url="https://us11.api.mailchimp.com/3.0/lists/9e391126bd";
const options={
  method:"POST",
  auth:("Haleh:2c29a9b1cc6098aae68b0a534465b069-us11")
}

const reqq= https.request(url,options,function (response) {
  if(response.statusCode===200){
    res.sendFile(__dirname+"/success.html");
  }
  else {
        res.sendFile(__dirname+"/failure.html");
  }
response.on("data",function (data) {
  console.log(JSON.parse(data));

});

});
reqq.write(flat_data);
reqq.end();

});

app.post("/failure",function (req,res) {
  res.redirect("/");
});


app.listen(process.env.PORT || 3000, function () {
  console.log("server is running");
});
