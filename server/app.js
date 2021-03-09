const express = require ("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { request } = require("express");

//Middlewere

app.use(cors ());
app.use(express.json());

//Routes
//Create a todo

app.post("/todos", async(req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING * ",
            [description]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get all todo

app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
        console.log(allTodos.rows);
    } catch (err) {
        console.error(err.message);x
    }
})

//Get a todo

app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);

        res.json(todo.rows);
        // console.log(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//update a todo

app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = request.body;
        const updateTodo = 
    } catch (err) {
        console.error(err);
    }
})

//delete a todo



app.listen(5000, () => {
    console.log("Server has started on port 5000")
});