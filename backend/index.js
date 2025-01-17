import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
const app=express();
app.get('/',(request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to the mern stack')
    });
app.get('/books', async (request, response) => {
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
         
        ) {
            return response.status(400).send({
                message: 'send all required fields: title, author, publishYear',
            })
        }
    }
        catch (error){
            console.log(error.message);
            response.status(500).send({message: error.message});
    
        }
    }

);

mongoose
.connect(mongoDBURL)
.then(() =>{
console.log('App connected to database');
app.listen(PORT, () => {
    console.log('App is listening to the port: ${PORT}');
});
})
.catch((error) =>{
    console.log(error);
    
    
})
