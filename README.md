# Exam-Project-Testing
Exam project for testing
Exercise 1 + 9

## Setup

### Setup Frontend
Commands in terminal:

    cd ./frontend
    (Go to frontend folder in terminal)

    npm install
    (Installs dependencies)

### (Optional) Make sure nothing runs on port 3000

Guide to kill processes on port 3000 (just in case):

In CMD, run command: 

        netstat -ano | findStr "3000"
        You will get the ID of the process running on the port
        
Then in CMD, run command: 

        taskkill /pid {id} /f
        (Replace {id} with the ID found in the previous step)

### Run Frontend

Commands in terminal:

    cd ./frontend
    (Go to frontend folder in terminal)
    
    npm start
    (Runs application)

If your browser doesn't automatically open the application, go to http://localhost:3000
