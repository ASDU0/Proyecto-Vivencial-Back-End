const mongoose = require('mongoose');
const dbConnect = async () => {
  const DB_URI = process.env.DB_URIV2
  mongoose.connect(DB_URI)
    .then(res => console.log("Conexion correcta"))
    .catch(err => console.log("Ocurrio un error", err));
}
module.exports = dbConnect;