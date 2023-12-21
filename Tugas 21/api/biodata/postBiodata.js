const DataDiri = require("../../data/dataDiri")

exports.PostBiodata = function(req, res){
    const {id, nama, jenis_kelamin, agama, alamat, usia, tanggal_lahir} = req.body;
    const dataBaru={
        "id": id,
        "nama": nama,
        "jenis_kelamin": jenis_kelamin,
        "agama": agama,
        "alamat": alamat,
        "usia": usia,
        "tanggal_lahir": tanggal_lahir
        }
        DataDiri.push(dataBaru);
        res.json({message: "success post data"})
    
    }