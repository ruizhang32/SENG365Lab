const express = require('express');
const app = express();
const data = require('./users.json');
// console.log(data.users);
const users = data.users;
const bodyParse = require('body-parser');
app.use(bodyParse.json());


app.get('/users',(req, res) => {

    res.status(200).send(users);
    }
);


app.get('/users/:id',(request, responds) => {
    const user = users.find(user => user.id === parseInt(request.params.id));
    //
    // const id = request.params.id;
    // let response = 'no user with id ${id}';
    // for (const user of data){
    //     if (id === user.id){
    //         response = user;
    //         break;
    //     }
    // }
    if(!user) responds.status(404).send('This user was not found.');
    responds.status(200).send(user);

});

app.post('/users',(request, responds) => {
    const newUser = request.body;
    users.push(newUser);
    responds.status(201).send(newUser);
});

app.put('/users/:id',(request, responds) => {
    const updatedUser = request.body;
    const user = users.find(user => user.id === parseInt(request.params.id));
    users[users.indexOf(user)] = updatedUser;

    responds.status(200).send(updatedUser);
});

app.delete('/users/:id',(request, responds) => {
    const user = users.find(user => user.id === parseInt(request.params.id));
    users.splice(users.indexOf(user),1);
    responds.send(users);
});

app.get('/users/:id/following',(request, responds) => {
    const reqId = request.params.id;
    const reqUser = users.find(user => user.id === parseInt(reqId));
    responds.status(200).send(reqUser.following);
});

app.post('/users/:id/following/:followerId',(req, res) => {
    const reqId = req.params.id;
    const followerId = req.params.followerId;
    const reqUser = users.find(user => user.id === parseInt(reqId));
    const response = reqUser.following.push(parseInt(followerId));
    res.sendStatus(200).send(response);
})

app.delete('/users/:id/following/:followingId',(req, res) => {
    const reqId = req.params.id;
    const unfollowingId = req.params.followingId;
    const reqUser = users.find(user => user.id === parseInt(reqId));
    const index = reqUser.following.indexOf(parseInt(unfollowingId));
    reqUser.following.splice(index,1);
    res.sendStatus(200).send('OK');
})

app.listen(3000,()=>{
    console.log("listening to port 3000.")
})


