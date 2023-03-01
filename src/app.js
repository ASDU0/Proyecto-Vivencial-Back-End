/**
 * Importando paquetes
 */
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const dbConnect = require("./config/mongoConexion");
const app = express();


/**
 * Usando paquetes
 */
app.use(cors());
app.use(express.json())
app.use(express.static("storage"))

/**
 * Importando todas las rutas por nombre de archivo
 */
app.use("/", require("./routes"))



/**
 * Poniendo nuestro servidor a correr
 */

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log("El servidor esta corriendo en el puerto " + PORT);
})
dbConnect()