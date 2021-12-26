const express = require("express");
const router = express.Router();

//req: todo lo que entra "requerimientos" --- res: todo lo que sale "respuestas"
router.get("/test", (req, res) => {

  console.log(req.query.dId);
  var toReturn = {
    status: "success",
    data: req.query
  }

  res.json(toReturn);

});


 router.post("/test", (req, res) => {

   console.log(req.body.dId);

   var toReturn = {
     status: "success",
     data: req.body
   }

   res.json(toReturn);

});

router.get("/device", (req, res) => {

});

router.post("/device", (req, res) => {

});

router.delete("/device", (req, res) => {

});

router.put("/device", (req, res) => {

});

module.exports = router;; //exportamos router para que sea considerado por express
