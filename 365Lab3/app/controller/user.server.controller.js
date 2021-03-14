const user = require('../model/user.server.model');

exports.list = async function(req, res){
    console.log( '\nRequest to list users...');
    try{
        const result = await user.getAll();
        res.json(result, 200);
    }catch (e) {
        res.status(500)
            .send(`ERROR getting users ${e}`);
    }
};

exports.create = async function(req, res){
    console.log('\nRequest to creat a new user.');
    const firstName = req.body.first_name;
    try{
        const result = await user.insert(firstName);
        res.json(result, 200);

    }catch (e) {
        res.status(500)
            .send(`ERROR creating a users ${e}`);
    }
};

exports.read = async function(req, res){
    console.log('\nRequest to read a new user.');
    const id = req.params.id;
    try{
        const result = await user.getOne(id);
        res.json(result, 200);

    }catch (e) {
        res.status(500)
            .send(`ERROR reading a users ${e}`);
    }
};

exports.update = async function(req, res){
    console.log('\nRequest to update a new user.');
    const id = req.params.id;
    const updateUser = req.body.first_name;
    try{
        const result = await user.alter(id,updateUser);
        res.json(result, 200);

    }catch (e) {
        res.status(500)
            .send(`ERROR updating a users ${e}`);
    }
};

exports.delete = async function(req, res){
    console.log('\nRequest to delete a new user.');
    const id = parseInt(req.params.id);
    try{
        const result = await user.remove(id);
        res.json(result, 200);

    }catch (e) {
        res.status(500)
            .send(`ERROR deleting a users ${e}`);
    }
};
