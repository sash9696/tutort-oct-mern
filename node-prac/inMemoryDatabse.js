import express from "express";

const app = express();

const port = 3000;

//middleware to parse JSON requests

app.use(express.json());

//in memory database

let users = [
    {id:1,name:'John Doe', email:'john@example.com'},
    {id:2,name:'Jane', email:'jane@example.com'},
];


//Read (GET) - Get all users
app.get('/users',(req,res)=>{
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

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json({message: 'User created successfully', user: newUser});
    
})


//Read (GET) - Get a single user by id

// curl http://localhost:3000/users/1

app.get('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if(!user){
        return res.status(404).json({error: 'User not found'});
    }

    res.json({message: 'User found', user});
});






//Update (PUT) - Update a user by id

app.put('/users/:id', (req, res) => {
    const id  = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if(!user){
        return res.status(404).json({error: 'User not found'});
    };

    const {name, email} = req.body;

    user.name = name || user.name;
    user.email = email || user.email;

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

    const userIndex = users.findIndex((user) => user.id ===  parseInt(req.params.id));

    if(userIndex === -1){
        return res.status(404).json({error:'User not found'});
    }
    users.splice(userIndex, 1);
    res.json({ message: 'User deleted successfully' });
})


//listen on port 3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


