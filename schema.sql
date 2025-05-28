CREATE DATABASE notes_app; 
USE notes_app;


CREATE TABLE notes (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

    
INSERT INTO notes (title, content) VALUES 
('My First Note', 'This is the content of my first note.'),
('Shopping List', 'A note about something else');


