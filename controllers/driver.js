const Driver = require("../models/driver.js");
exports.getdriver = async (req,res)=>{
    try {
        const driver = await Driver.find();
        res.status(200).json({
          success: true,
          driver: driver,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
};