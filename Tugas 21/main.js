const express = require('express');
const { GetUser } = require('./api/user/getUser');
const { PostUser } = require('./api/user/postUser');
const { DeleteUser } = require('./api/user/deleteUser');
const { GetProduct } = require('./api/product/getProduct');
const { PostProduct } = require('./api/product/postProduct');
const { DeleteProduct } = require('./api/product/deleteProduct');
const { GetBiodata } = require('./api/biodata/getBiodata');
const { PostBiodata } = require('./api/biodata/postBiodata');
const { DeleteBiodata } = require('./api/biodata/deleteBiodata');
const app = express()
const port = 3000
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//route api user//
app.get('/get-user', GetUser)
app.post('/post-user', PostUser)
app.delete("/delete-user",DeleteUser)  

//route api product//
app.get('/get-product', GetProduct)
app.post('/post-product', PostProduct)
app.delete("/delete-product",DeleteProduct) 


//route api biodata//
app.get('/get-biodata', GetBiodata)
app.post('/post-biodata', PostBiodata)
app.delete("/delete-biodata",DeleteBiodata) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
