const db = require('./../models/conectionDB');

module.exports = {
    listarUsuarios: async function () {
        const pool = await db.connDatabase();
        const result = await pool.request().query("select * from usuarios;");
        return result;
    }
}
