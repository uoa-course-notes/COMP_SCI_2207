import express from 'express';

// import {getNotes, getNote, createNote} from './database'; // Import the functions from database.js
import "./database.js"; // Import the database module to ensure it runs
import { getNotes } from './database.js'; // Import the getNotes function from database.js
import { getNote } from './database.js'; // Import the getNote function from database.js
import { createNote } from './database.js'; // Import the createNote function from database.js
import { title } from 'process';

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
// Any json body will accepted and passed into req.body object 



app.get("/notes", async (req, res) => {
    const notes = await getNotes();
    res.send(notes); // Send the notes as a JSON response
    // res.send("This is the notes endpoint. You can retrieve all notes here.");
});


app.get("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const note = await getNote(id);
    res.send(note); // Send the note with the specified ID as a JSON response
});


app.post("/notes", async (req, res) => {
    const {title, content} = req.body; // Destructure title and content from the request body
    const newNote = await createNote(title, content);
    res.status(201).send(newNote);
});



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!🍰');
});



app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});