const express = require('express');
const app = express();

app.get('/',((request, responds) => {
    responds.send('Http request: GET /')
}));

app.post('/',((request, responds) => {
    responds.send('Got a POST request.')
}));

app.put('/user',((request, responds) => {
    responds.send('Got a PUT request at /user.')
}));

app.delete('/user',((request, responds) => {
    responds.send('Got a DELETE request at /user.')
}));

app.listen(8000,()=>{
    console.log("listening to port 8000.")
})
