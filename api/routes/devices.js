const express = require('express');
const router = express.Router();

router.get("/testing", (req, res) => { //req: todo lo que entra "requerimientos" --- res: todo lo que sale "respuestas"
  console.log("Bye IoT")
  res.send("Hello IoT GL API");
});

module.exports = router; //exportamos router para que sea considerado por express
