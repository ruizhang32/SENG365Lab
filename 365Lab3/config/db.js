const mongoose = require('mongoose');

exports.connect = mongoose.connect('mongodb://localhost/mongo-exercises',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log('MongoDB connected.')})
.catch(()=>{console.error('Could not connect to MongoDB.')})

const userSchema = new mongoose.Schema({
   id: Number,
   age: Number,
   first_name: String,
   last_name: String,
   gender: String,
   email: String,
   following: Array
});
exports.User = mongoose.model('User',userSchema);



















