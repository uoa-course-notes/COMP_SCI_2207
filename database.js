// Code to interact with the database
import mysql from 'mysql2'
import dotenv from 'dotenv';


dotenv.config(); // Load environment variables from .env file

const pool = mysql.createPool({
    // ///////DIDNT WORK/////////////
    // user: 'root',
    // password: 'G0blrzQ.=R12',
    // ////////////////////


    // host: '127.0.0.1',
    // user: 'node_user',
    // password: 'your_app_password', 
    // database: 'notes_app',
    
    // /////////////////////////////////////////////////
    // A better approach is to use environment variables for sensitive information
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,    
    port: process.env.MYSQL_PORT || 3306, // Default MySQL port is 3306
}).promise(); // We use promise-based API for async/await support




// try{
//     const result = await pool.query("SELECT * FROM notes");
//     console.log(result); // we expect to see the result of the query
// }
// catch (error) {
//     console.error("Error executing query:", error);
// }

// const result = await pool.query("SELECT * FROM notes");
// // console.log(result); // we expect to see the result of the query

// const rows = result[0]; // The first element contains the rows

// console.log(result);
// console.log(`There are ${result.length} rows in the result. The first element is the result of our database and the second is the metadata of the table named 'notes' in this case.`); // Log the number of rows
// console.log("\n\nWe're the first element of the result, which is an array of objects representing the rows in the 'notes' table.");

// console.log(rows); // Log the rows to see the data



// A more modular approach:

// This function retrieves all notes from the database
async function getNotes(){
    // We can destructure the result to get the rows directly
    const [rows] = await pool.query("SELECT * FROM notes");
    return rows;
}



async function getNote(id){
    // const [rows] = await pool.query(`
    //     SELECT * FROM notes WHERE id = ${id}
    //     `);

    // PREPARED STATEMENT to prevent SQL injection
    const [rows] = await pool.query(`
        SELECT * FROM notes WHERE id = ?
        `, [id]);
    return rows[0]; // Return the first row (note) with the specified id
}


// const notes = await getNotes();
// console.log(notes); // Log the notes retrieved from the database

// console.log("Printing only one note with id 1");
// const note = await getNode(1);
// console.log(note); // Log the note with id 1
// const note = await getNode(100); // undefined 



async function createNote(title, content){
    const [result] = await pool.query(`
        INSERT INTO notes (title, content)
        VALUES (?, ?)`, [title, content]); // must appear in the order of the question mark. 
    // return result.insertId; // Return the ID of the newly created note
    // console.log("Within the createNote function, result id is ", result.insertId);
    // console.log("The title is ", title);
    // console.log("The content is ", content);
    // return {
    //     id: result.insertId,
    //     title,
    //     content
    // };

    const id = result.insertId; // Get the ID of the newly created note
    // when we run this, not only will we able to create a note with a title and content,
    // but we will also be able to retrieve the note we just created.
    return getNote(id);
}



// const result = await createNote('New test!!!!!!!!', 'This is a test note');	


// console.log(`Note created with ID: ${result}`); // Log the ID of the newly created note
// console.log(result);
// console.log(result); // Log the result of the insert operation
// [
//   ResultSetHeader {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 5,
//     info: '',
//     serverStatus: 2,
//     warningStatus: 0,
//     changedRows: 0
//   },
//   undefined
// ]


















export { getNotes, getNote, createNote }; // Export the functions for use in other modules

// pool.end(); // Close the pool when done
