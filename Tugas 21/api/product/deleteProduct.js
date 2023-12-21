const DataProduct = require("../../data/dataProduct")

exports.DeleteProduct = function (req, res){
    const {id} = req.body;
    for (let index = 0; index < DataProduct.length; index++) {
        if (id == DataProduct[index].id) {
            DataProduct.splice(index,1)
        }
    }
    res.json({
        message: "data berhasil dihapus"
    })
}