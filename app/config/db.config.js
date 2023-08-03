module.exports = {
 
//para usuario
    HOST: "192.168.41.69",
    PORT: "1433",
    USER: "asofia",
    PASSWORD: "r99@D6l6",
    DB: "RS_Requerimientos",
    dialect: "mssql",
/*
pool es opcional, se usará para la configuración del grupo de conexiones de Sequelize:

max: número máximo de conexiones en el grupo
min: número mínimo de conexión en el grupo
idle: tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
acquire: tiempo máximo, en milisegundos, ese grupo intentará conectarse antes de arrojar un error
*/
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };