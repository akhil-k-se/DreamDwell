const author = require("../Models/Author");
const mail = require("../Config/credentials");

const createBuyer = async(req,res) =>{
    try{
        mail.send
        const authorInput = req.body;
        await author.create(authorInput);
        res.send("Created");
    }
    catch(err){
        console.log(err);
        res.json({
            mssg:"error"
        })
    }
}

const getBuyer = async (req , res)=>{
    try
    {
        const getData = await author.find()
        res.json({
            status : 200,
            msg : 'users exist',
            data : 'fetch',
            getData
        })
    }
    catch(err)
    {
        console.log(err);
    }
}

const updateBuyer = async (req , res)=>{
    try
    {
        const id = req.params._id
        const updateInputData = req.body
        const updateData = await author.findByIdAndUpdate(id , updateInputData ,{
            new : true
        })
        res.json({
            status : 200,
            msg : 'authors updated',
            data : 'updated',
            updateData
        })

    }
    catch(err)
    {
        console.log(err);
    }
}
const deleteAuthor = async (req , res)=>{
    try
    {
        const id = req.params._id
        const InputData = req.body
        const deleteData = await author.findByIdAndDelete(id , InputData ,{
            new : true
        })
        res.json({
            status : 200,
            msg : 'author deleted',
            data : 'deleated',
            deleteData
        })

    }
    catch(err)
    {
        console.log(err);
    }
}

const books= require("../Models/Book");

const createBooks = async(req,res) =>{
    try{
        const authorInput = req.body;
        await books.create(authorInput);
        res.send("Created");
    }
    catch(err){
        console.log(err);
        res.json({
            mssg:"error"
        })
    }
}

const getBooks = async (req , res)=>{
    try
    {
        const getData = await books.find()
        res.json({
            status : 200,
            msg : 'book exist',
            data : 'fetch',
            getData
        })
    }
    catch(err)
    {
        console.log(err);
    }
}

const updateBook = async (req , res)=>{
    try
    {
        const id = req.params._id
        const updateInputData = req.body
        const updateData = await books.findByIdAndUpdate(id , updateInputData ,{
            new : true
        })
        res.json({
            status : 200,
            msg : 'book updated',
            data : 'updated',
            updateData
        })

    }
    catch(err)
    {
        console.log(err);
    }
}
const deleteBook = async (req , res)=>{
    try
    {
        const id = req.params._id
        const InputData = req.body
        const deleteData = await books.findByIdAndDelete(id , InputData ,{
            new : true
        })
        res.json({
            status : 200,
            msg : 'book deleted',
            data : 'deleated',
            deleteData
        })

    }
    catch(err)
    {
        console.log(err);
    }
}



const publication= require("../Models/Publication");

const createPublication = async(req,res) =>{
    try{
        const authorInput = req.body;
        await publication.create(authorInput);
        res.send("Created");
    }
    catch(err){
        console.log(err);
        res.json({
            mssg:"error"
        })
    }
}

const getPublication = async (req , res)=>{
    try
    {
        const getData = await publication.find()
        res.json({
            status : 200,
            msg : 'book exist',
            data : 'fetch',
            getData
        })
    }
    catch(err)
    {
        console.log(err);
    }
}

const updatePublication = async (req , res)=>{
    try
    {
        const id = req.params._id
        const updateInputData = req.body
        const updateData = await publication.findByIdAndUpdate(id , updateInputData ,{
            new : true
        })
        res.json({
            status : 200,
            msg : 'book updated',
            data : 'updated',
            updateData
        })

    }
    catch(err)
    {
        console.log(err);
    }
}
const deletePublication = async (req , res)=>{
    try
    {
        const id = req.params._id
        const InputData = req.body
        const deleteData = await publication.findByIdAndDelete(id , InputData ,{
            new : true
        })
        res.json({
            status : 200,
            msg : 'book deleted',
            data : 'deleated',
            deleteData
        })

    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports = {createAuthor , getAuthors , updateAuthor , deleteAuthor, createPublication , getPublication , updatePublication , deletePublication, createBooks , getBooks , updateBook , deleteBook}
