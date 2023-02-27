/**
 * Importando paquetes
 */
require("dotenv").config();
const express = require('express');
const cors = require('cors');


/**
 * Usando paquetes
 */
app.use(cors());
app.use(express.json())
app.use(express.static("storage"))

/**
 * Importando todas las rutas por nombre de archivo
 */
app.use("/api", require("./routes"))



/**
 * Poniendo nuestro servidor a correr
 */
app.listen(PORT, () => {
  console.log("El servidor esta corriendo en el puerto" + PORT);
})