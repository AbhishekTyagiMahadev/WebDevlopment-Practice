import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/webDevlopment-Practice")
const app = express()
const port = 3000

app.get('/', (req, res) => {

    const todo = new Todo({ name: "Abhishek Tyagi", desc: "Description of this todo", isDone: false, days: Math.floor(Math.random() * 45 + 5 * Math.random()) })
    todo.save(); 
    res.send('Hello World ')
})

app.get('/a', async (req, res) => {
    let todo = await Todo.find();
    res.json(todo);
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})