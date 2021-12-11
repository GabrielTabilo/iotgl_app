//requires
const express = require('express');

//instances
const app = express(); //variable que representa a express

//listener
app.listen(3001, () => {
  console.log("API server listening on port 3001")
}); //Es un escuchador que va a estar atento a un puerto determinado por si alguien hace una petición

//endpoint test
  //endpoint: Es una dirección web que va a empezar a existir en nuestra API para desarropllar cierta tarea (crear usuario, agregar usuario, etc.)
app.get("/testing", (req, res) => { //req: todo lo que entra "requerimientos" --- res: todo lo que sale "respuestas"
  res.send("Hello IoT GL API");
});

app.get("/", (req, res) => {
  res.send("Index")
})
