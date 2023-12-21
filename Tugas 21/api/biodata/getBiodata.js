const DataDiri = require("../../data/dataDiri")

exports.GetBiodata = function (req, res) {
    res.json({message: "succes get data", DataDiri})
}