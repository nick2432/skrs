const  router  = require("express").Router();
const {getdriver}=require("../controllers/driver.js")
router.route("/driver").get(getdriver); 
module.exports = router;