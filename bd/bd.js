const Alojamientos =
{
  "_id": ObjectId("..."),
  "nombre": String,
  "tipo_alojamiento": String,
  "descripcion": String,
  "ubicacion": {
    "direccion": String,
    "ciudad": String,
    "pais": String,
    "mapa": String
  },
  "comodidades": [
    {
      "baños": 3,
      "max_niños": 5,
      "max_adultos": 10,
      "wifi": true,
      "lavadora": true
    }
  ],
  "aforo": {
    "adultos": Number,
    "niños": Number
  },
  "imagenes": [String],
  "anfitrion_id": ObjectId("..."),
  "disponibilidad": {
    "inicio": ISODate("..."),
    "fin": ISODate("...")
  },
  "precio": {
    "valor": Number,
    "moneda": String
  },
  "evaluaciones": [
    {
      "usuario_id": ObjectId("..."),
      "comentario": String,
      "puntuacion": Number,
      "fecha": ISODate("...")
    }
  ]
}

const Reservas =
{
  "_id": ObjectId("..."),
  "alojamiento_id": ObjectId("..."),
  "huesped_id": ObjectId("..."),
  "fecha_inicio": ISODate("..."),
  "fecha_fin": ISODate("..."),
  "precio_total": {
    "valor": Number,
    "moneda": String
  },
  "pagado": Boolean
}


const Mensajeria =
{
  "_id": ObjectId("..."),
  "emisor_id": ObjectId("..."),
  "receptor_id": ObjectId("..."),
  "fecha": ISODate("..."),
  "contenido": String
}



const Usuarios =
{
  "_id": ObjectId("..."),
  "nombre": String,
  "email": String,
  "telefono": String,
  "tipo": String, // "anfitrion" o "huesped"
  "contrasena": String,
  "alojamientos": [ObjectId("...")],
  "reservas": [ObjectId("...")],
  "evaluaciones": [
    {
      "alojamiento_id": ObjectId("..."),
      "comentario": String,
      "puntuacion": Number,
      "fecha": ISODate("...")
    }
  ]
}


const Evaluaciones =
{
  "_id": ObjectId("..."),
  "alojamiento_id": ObjectId("..."),
  "usuario_id": ObjectId("..."),
  "comentario": String,
  "puntuacion": Number,
  "fecha": ISODate("...")
}