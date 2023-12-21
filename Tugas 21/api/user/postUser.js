const Data = require("../../data/data")

exports.PostUser = function(req, res){
    const {id, nama, number_phone, point} = req.body;
    const dataBaru={
        "id": id,
        "nama": nama,
        "number_phone": number_phone,
        "point": point
        }
        Data.push(dataBaru);
        res.json({message: "success post data"})
    
    }