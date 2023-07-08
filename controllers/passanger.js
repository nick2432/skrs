const Passanger = require("../models/passanger.js");
exports.getpassanger = async (req,res)=>{
    try {
        const passanger = await Passanger.find();
        res.status(200).json({
          success: true,
          passanger: passanger,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
};