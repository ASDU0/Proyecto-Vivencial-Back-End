const Alojamiento =
{
  "_id": ObjectId("616d6f14281c20f0d8c0fb90"),
  "nombre": "Casa de playa con piscina",
  "tipo": "casa",
  "descripcion": "Hermosa casa de playa con piscina y vista al mar",
  "ubicacion": {
    "direccion": "Calle del Mar 123",
    "ciudad": "Lima",
    "pais": "Perú"
  },
  "comodidades": [
    "wifi",
    "televisión",
    "aire acondicionado",
    "piscina",
    "vista al mar"
  ],
  "aforo": {
    "adultos": 10,
    "niños": 5
  },
  "imagenes": [
    "https://example.com/images/casa-de-playa-1.jpg",
    "https://example.com/images/casa-de-playa-2.jpg",
    "https://example.com/images/casa-de-playa-3.jpg"
  ],
  "anfitrion_id": ObjectId("616d6f14281c20f0d8c0fb91"),
  "disponibilidad": {
    "inicio": ISODate("2022-07-01T00:00:00Z"),
    "fin": ISODate("2022-07-31T00:00:00Z")
  },
  "precio": {
    "valor": 2000,
    "moneda": "PEN"
  }
}

const reservas =
{
  "_id": ObjectId("616d6f14281c20f0d8c0fb94"),
  "alojamiento_id": ObjectId("616d6f14281c20f0d8c0fb90"),
  "anfitrion_id": ObjectId("616d6f14281c20f0d8c0fb91"),
  "huesped_id": ObjectId("616d6f14281c20f0d8c0fb92"),
  "fecha_inicio": ISODate("2022-07-10T00:00:00Z"),
  "fecha_fin": ISODate("2022-07-15T00:00:00Z"),
  "precio_total": {
    "valor": 7500,
    "moneda": "PEN"
  },
  "estado": "confirmado"
}

const mensajeria =
{
  "_id": ObjectId("616d6f14281c20f0d8c0fb95"),
  "remitente_id": ObjectId("616d6f14281c20f0d8c0fb92"),
  "destinatario_id": ObjectId("616d6f14281c20f0d8c0fb91"),
  "contenido": "Hola, estoy interesado en reservar tu alojamiento para las próximas vacaciones.",
  "fecha_envio": ISODate("2022-09-01T12:34:56Z"),
  "estado": "no_leido"
}

const Usuarios =
{
  "_id": ObjectId("616d6f14281c20f0d8c0fb94"),
  "nombre": "Juan",
  "email": "juan.perez@gmail.com",
  "telefono": "+5215543219876",
  "tipo": "huesped",
  "contrasena": "qwerty123",
  "alojamientos": [
    ObjectId("617483b2a43556e04ab52712"),
    ObjectId("617483c2a43556e04ab52713")
  ],
  "reservas": [
    ObjectId("618e94c71dcd677e4de4a679"),
    ObjectId("618e94d91dcd677e4de4a67a")
  ]
}

const evaluaciones =
{
  "_id": ObjectId("61900c3e3b016e3c8742777f"),
  "alojamiento_id": ObjectId("617483b2a43556e04ab52712"),
  "usuario_id": ObjectId("616d6f14281c20f0d8c0fb94"),
  "comentario": "Excelente alojamiento, todo muy limpio y cómodo",
  "puntuacion": 5,
  "fecha": ISODate("2022-11-12T14:30:00Z")
}
