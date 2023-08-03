const db = require("../models");
const Rol = db.Roles;
const Op = db.Sequelize.Op;

// Crea y guarda
exports.create = (req, res) => {
  //console.log(req.body.Nombre);
   // Validate request
   if (!req.body.Nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a rol
  const rol = {
    //Id: req.body.Id,
    Nombre: req.body.Nombre,
    //Activo: req.body.Activo ? req.body.Activo : false
  };
  // GUARDA EL ROL EN LA BASE DE DATOS
  Rol.create(rol)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
     // console.log(rol.Nombre)
      res.status(500).send({
        message:
          err.message || "No se pudo crear el rol"
      });
    });
};

// Devuelve todos los roles de la base de datos
//exports.findAll = (req, res) => {
  
//};

// busca un rol por id
//exports.findOne = (req, res) => {
  
//};

// actualiza un rol por id
//exports.update = (req, res) => {
  
//};

// elimina un rol
//exports.delete = (req, res) => {
  
//};

// elimina todos los roles de la base de datos
//exports.deleteAll = (req, res) => {
  
//};

// busca todos los roles activos
//exports.findAllPublished = (req, res) => {
  
//};