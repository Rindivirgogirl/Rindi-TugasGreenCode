const Data = require("../../data/data")

exports.DeleteUser = function (req, res){
    const {id} = req.body;
    for (let index = 0; index < Data.length; index++) {
        if (id == Data[index].id) {
            Data.splice(index,1)
        }
    }
    res.json({
        message: "data berhasil dihapus"
    })
}