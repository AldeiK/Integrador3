const conn = require('./connection'); 

async function obtenerRegistros(req, res) {
  try {
    const resultado = await conn.query("SELECT id, timestamp, action FROM activity_log ORDER BY timestamp DESC");
    
    console.log(resultado.rows);  

    res.status(200).json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los registros de actividad");
  }
}

module.exports = {
  obtenerRegistros
};
