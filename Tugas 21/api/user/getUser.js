const Data = require("../../data/data")

exports.GetUser = function (req, res) {
    res.json({message: "succes get data", Data})
}