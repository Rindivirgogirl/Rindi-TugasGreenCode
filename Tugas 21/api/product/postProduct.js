const DataProduct = require("../../data/dataProduct")

exports.PostProduct = function(req, res){
    const {id, nama, harga, stok} = req.body;
    const dataBaru={
        "id": id,
        "nama": nama,
        "harga": harga,
        "stok": stok
        }
        DataProduct.push(dataBaru);
        res.json({message: "success post data"})
    
    }