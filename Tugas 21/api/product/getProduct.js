const DataProduct = require("../../data/dataProduct")

exports.GetProduct = function (req, res) {
    res.json({message: "succes get data", DataProduct})
}