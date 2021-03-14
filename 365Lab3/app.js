const db = require('./config/db');
const express = require('./config/express');
const app = express();

async function main(){
    try{
        await db.connect;
        const port = process.env.port || 3000;
        app.listen(port, ()=>console.log(`Listening to the port ${port}.`));
    }catch (err){
        console.log('Unable to connect to MongoDB.');
        process.exit(1);
    }
}

main().catch(err=> console.log(err));