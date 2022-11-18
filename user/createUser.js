const db = require('./../models/conectionDB');
const responseApi = require('./../utils/responseApi');

module.exports = {
    createUser: async function (event) {
        const pool = await db.connDatabase();
        const queryUser = `Insert into usuarios (nombres,apellidos,edad,email) values 
        ('`+ event.body.nombres + `','` + event.body.apellidos + `',` + event.body.edad + `,'` + event.body.email + `')`;
        let result = await pool.request().query(queryUser);
        if (result.rowsAffected.length > 0) {
            result = new responseApi(0, 'Success', result.recordset, 'success');
        } else {
            result = new responseApi(1, 'Failed', 'No results', 'failed');
        }
        return result;
    }
}
