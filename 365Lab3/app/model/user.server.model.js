const db = require("../../config/db");

exports.getAll = async function() {
   console.log('Request to get all users from the database...');
   const usersSelected = await db.User.find();
   return usersSelected;
}

exports.getOne = async function(id){
    console.log('Request to read a user from the database...');
    const user = await db.User.find({"id":id});
    return user;
};

exports.insert = async function(firstName){
   console.log(`Request to insert ${firstName} database...`);
   const currentNo = await db.User.find().count();
   const newUser = await db.User.create({
   id: currentNo + 1,
   first_name: firstName,
   last_name: '',
   gender: '',
   email: '',
   following: []
  })
    return newUser;
};


exports.alter = async function(id,updatedUser){
    console.log('Request to update a user from the database...');
    const user = await db.User.updateOne({"id":id},{
        $set: {
            first_name : updatedUser
        }
    },{new: true});
    return user;
};

exports.remove = async function(id){
    console.log('Request to delete a user from the database...');
    const user = await db.User.deleteOne({"id": id});
    return user;
};