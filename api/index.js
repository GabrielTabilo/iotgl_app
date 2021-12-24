//requires
import express, { json, urlencoded } from 'express';
import { connect } from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import colors from 'colors';

//instances
const app = express(); //variable que representa a express

//express config
app.use(morgan("tiny")); //instncia para mostrar la salida de cuando alguien llama un endpoint. Tiny es la versión
app.use(json()); //Permite trabajar con JSON en express
app.use(urlencoded({ //traducción a JSON de una forma de trabajar con el URL utilizando "?" y "&", etc.
  extended: true
}));
app.use(cors()); //Politicas de seguridad esten incluidas.

//express routes
app.use('/api', require('./routes/devices.js').default) // "/api" es el apellido o prefijo de la ruta para los endpoints que se encuentren en "devices.js"
app.use('/api', require('./routes/users.js').default)

export default app; //para poder exportar la instancia de express a otrops archivos que administren las rutas de los endoppoints.
//listener
app.listen(3001, () => {
  console.log("API server listening on port 3001")
}); //Es un escuchador que va a estar atento a un puerto determinado por si alguien hace una petición

//endpoint test
//endpoint: Es una dirección web que va a empezar a existir en nuestra API para desarropllar cierta tarea (crear usuario, agregar usuario, etc.)
//Lo que está entrellaves  del endoint se va a ejecutar cuando un cliente llame o "golpee" la URL (ruta) del endpoint.

//"/testing" endpopoint ahora se encuentra routes/devices.js

//Mongo Connection
const mongoUserName = "devuser";
const mongoPassword = "devpassword";
const mongoHost = "localhost";
const mongoPort = "27017";
const mongoDatabase = "ioticos_god_level";

var uri = "mongodb://" + mongoUserName + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDatabase;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  authSource: "admin"
};

try { //intentar
  connect(uri, options).then(
      () => {
        console.log("\n");
        console.log("*******************************".green);
        console.log("✔ Mongo Successfully Connected!".green);
        console.log("*******************************".green);
        console.log("\n");
      },
      (err) => {
        console.log("\n");
        console.log("*******************************".red);
        console.log("    Mongo Connection Failed    ".red);
        console.log("*******************************".red);
        console.log("\n");
        console.log(err);
      }
    );
} catch (error) {
  console.log("ERROR CONNECTING MONGO ");
  console.log(error);
}
