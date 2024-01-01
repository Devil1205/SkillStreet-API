# About API Endpoints

#### Important: Basic Authentication is used to prevent api endpoints being hit from unknown users. So, make sure to add name as _'admin'_ & password as _'admin@123'_ in the basic auth header to test the api endpoints. Replace :id with note id that can be obtained by fetching all notes for any particular note.
<B>  
 
 1. Fetch all notes present in database  
    URL: [https://skillstreet-api.onrender.com/notes](url)  
    Request Method: GET  
    Request Body Format: no body input required  
    Response Format: Array of objects corresponding user notes.

 2. Fetch a particular note by its ID  
    URL: [https://skillstreet-api.onrender.com/notes/:id](url)  
    Request Method: GET  
    Request Body Format: no body input required  
    Response Format: Object corresponding user note.

 3. Add a new note in database  
    URL: [https://skillstreet-api.onrender.com/notes](url)  
    Request Method: POST  
    Request Body Format: {"title": "note title", "content": "note content"}  
    Response Format: Object corresponding to new created user note. 

 4. Update an existing note in database  
    URL: https://skillstreet-api.onrender.com/notes/:id  
    Request Method: PUT  
    Request Body Format: {"title": "updated title", "content": "updated content"}  
    Response Format: Object corresponding to updated user note.

 5. Delete an existing note in database  
    URL: [https://skillstreet-api.onrender.com/notes/:id](url)  
    Request Method: DELETE  
    Request Body Format: no body input required  
    Response Format: Object corresponding to deleted user note.</B>

# About The Implementation:  
Backend:
I have created created a clean server folder structure and added comments for anyone's reference. Used node.js as the backend along with express.js to setup the server and routes. Also used various npm packages like cors, mongoose etc.

Database:
I have used mongodb as the database to store all the notes. To integrate mongodb in the nodejs, I have used mongoose.
For deployment purpose I have used mongodb atlas whose URI is present in .env for security purposes. To test api endpoints, visit the deployed URL.

# Deployment:  
https://skillstreet-api.onrender.com/   (to test api endpoints)
