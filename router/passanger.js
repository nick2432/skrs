const  router  = require("express").Router();
const {getpassanger}=require("../controllers/passanger.js")
router.route("/passanger").get(getpassanger); 
module.exports = router;