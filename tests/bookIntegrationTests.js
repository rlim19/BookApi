var should = require("should"),
    request = require("supertest"),
    app = require("../app.js"),
    mongoose = require("mongoose"),
    Book = mongoose.model("Book"),
    agent = request.agent(app);

describe("Book Crud Test", function(){
  it("Should allow a book to be posted and return a read and _id", function(done){
    var bookPost = {title: "new Book", author:"Ricky Lim", genre:"Fiction"};

    agent.post("/api/books")
         .send(bookPost)
         .expect(200)
         .end(function(err, res){
           res.body.read.should.equal(false);
           res.body.should.have.property("_id");
           done()
         })
  })

  afterEach(function(done){
    Book.remove().exec();
    done();
  })
})
