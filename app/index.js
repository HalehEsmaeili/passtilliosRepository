const express= require("express");
const bodyParser=require("body-parser");
const pg=require("pg");
const app=express();
const port=3000;
let webtexts=[];
//app.use(bodyParser.urlencoded({extended:true}));
const db=new pg.Client({
user:"postgres",
host:"localhost",
database:"passtilliosDB",
password:"2481953602heddrpit!",
port:8001,
});

db.connect().then(() => {
  console.log("Connected to the database");
})
.catch((err) => {
  console.error("Error connecting to the database:", err.stack);
});;
app.get("/",function (req,res) {
//  res.send("server is up and running");
db.query("SELECT * FROM websitetxts",(err,res)=>{
  if(err){
    console.error("error exectuing query",err.stack);
  }
  else{
  webtexts=res.rows;
  console.log(webtexts);
  }
});

app.post("/",function (req,res) {

});
      });
 






app.listen(3000, () => {
  console.log("server running on port 3000");
});
