const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

let data =[];
app.get('/get-user', (req, res) => {
    res.json({message: "succes get data", data})
})

app.post('/post-user', function(req, res){
const {id, nama, number_phone, point} = req.body;
const dataBaru={
    "id": id,
    "nama": nama,
    "number_phone": number_phone,
    "point": point
    }
    data.push(dataBaru);
    res.json({message: "success post data"})

})

app.delete("/delete-user", function (req, res){
    const {id} = req.body;
    for (let index = 0; index < data.length; index++) {
        if (id == data[index].id) {
            data.splice(index,1)
        }
    }
    res.json({
        message: "data berhasil dihapus"
    })
}

)  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
