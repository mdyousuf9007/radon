const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

//Q.3
const createBook= async function (req, res) {
    let bookData = req.body;
    if(data.author) res.send("please entered the Author ID");
    let author = await publisherModel.findById(data.publisher);
    if(author)res.send(" entered author ID is not valid");

    if(data.publisher)res.send("Please entered the Publisher ID");
    let publisher=await publisherModel.findById(data.publisher);
    if (publisher)res.send("entered Publisher ID is not valid");
    
    let saveData = await bookModel.create(data);
    res.send(savedData);

};



//Q4.
const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate([("author"),("publisher")]);
    res.send({data: books})
}


module.exports.createBook= createBook;
module.exports.getBooksData= getBooksData;
