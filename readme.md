Instructions to run the project:

Step 1. git clone ${url}

Step 2. Follow frontend and backend instructions, run them in separate terminals.

Frontend:
1. cd client
2. npm i
3. npm run dev

Backend:
1. cd server
2. npm i
3. npm run dev

=================================
About The Implementation:

Backend:
I have created created a clean server folder structure and added comments for anyone's reference. Used node.js as the backend along with express.js to setup the server and routes. Also used various npm packages like cors, mongoose etc.

Frontend:
The frontend of the project is built using React.js as the framework along with MUI for an clean and interactive user interface. I have used various react hooks like useState, useLocation, useNavigate etc. And for the API integration I used fetch API to fetch data from backend.

Database:
I have used mongodb as the database to store all the player details. To integrate mongodb in the nodejs, I have used mongoose.
For deployment purpose I have used mongodb atlas whose URI is present in .env for security purposes. So, if you wish to run it on your device then either use local mongodb URI or visit deployment link to use.

===================================
Deployment:

Frontend: 

Backend: https://psms-z35j.onrender.com/players