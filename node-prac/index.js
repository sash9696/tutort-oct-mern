import express from "express";
import fs from "fs";
import path from "path";



//Path to the JSON file where the data will be stored

const usersFilePath = path.join(process.cwd(),'users.json');

// console.log('usersFilePath',{cwd:process.cwd(), usersFilePath});

const app = express();

const port = 3000;

//middleware to parse JSON requests

app.use(express.json());


//helper function to read data from tjhe file
const readUsersFromFile = () => {
    const rawData = fs.readFileSync(usersFilePath);
    return JSON.parse(rawData);
}

//helper function to write data to the file

const writeUsersToFile = (users) => {
    const data  = JSON.stringify(users,null,2);
    fs.writeFileSync(usersFilePath,data);
};

//in memory database

// let users = [
//     {id:1,name:'John Doe', email:'john@example.com'},
//     {id:2,name:'Jane', email:'jane@example.com'},
// ];


//Read (GET) - Get all users
app.get('/users',(req,res)=>{
    const users = readUsersFromFile();
    res.json(users);
});

// Create (POST) - Create a new user

// curl -H 'Content-Type: application/json' \
//       -d '{ "email":"foo@gmail.com","name":"bar"}' \
//       -X POST \
//       http://localhost:3000/users


// {"message":"User created successfully","user":{"id":3,"name":"bar","email":"foo@gmail.com"}}%                      

app.post('/users',(req,res)=>{
    console.log('body',req.body);
    const {name, email} = req.body;

    if(!name || !email){
        return res.status(400).json({error: 'name and email required'});
    };

    const users = readUsersFromFile();
    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    writeUsersToFile(users);
    res.status(201).json({message: 'User created successfully', user: newUser});
    
})


//Read (GET) - Get a single user by id

// curl http://localhost:3000/users/1

app.get('/users/:id',(req,res)=>{
    const users  = readUsersFromFile();
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if(!user){
        return res.status(404).json({error: 'User not found'});
    }

    res.json({message: 'User found', user});
});






//Update (PUT) - Update a user by id

app.put('/users/:id', (req, res) => {
    const users  = readUsersFromFile();
    const id  = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if(!user){
        return res.status(404).json({error: 'User not found'});
    };

    const {name, email} = req.body;

    user.name = name || user.name;
    user.email = email || user.email;

    writeUsersToFile(users)

    res.json({message: 'User updated successfully', user}); 
})


//Delete (DELETE) - Delete a user by id

// curl -X DELETE http://localhost:3000/users/1

app.delete('/users/:id', (req, res) => {
    // const id = parseInt(req.params.id);
    // const user = users.find(user => user.id === id);

    // if (!user) {
    //     return res.status(404).json({ error: 'User not found' });
    // }

    // users = users.filter(user => user.id !== id);

    const users  = readUsersFromFile();
    const userIndex = users.findIndex((user) => user.id ===  parseInt(req.params.id));

    if(userIndex === -1){
        return res.status(404).json({error:'User not found'});
    }
    users.splice(userIndex, 1);
    writeUsersToFile(users);
    res.json({ message: 'User deleted successfully' });
})


//listen on port 3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


