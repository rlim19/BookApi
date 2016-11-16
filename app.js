var express = require("express"),
    mongoose = require("mongoose");
    bodyParser = require("body-parser")

var db = mongoose.connect("mongodb://localhost/bookAPI");

var Book = require("./models/bookModel");

var app = express();

var port = process.env.PORT || 8001;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require("./routes/bookRoutes")(Book);
app.use("/api/books", bookRouter)
app.use("/api/authors", authorRouter)

app.get("/", function(req, res){
  res.send("Welcome world");
})

app.listen(port, function(){
  console.log("gulp is running on PORT: "+ port)
})
