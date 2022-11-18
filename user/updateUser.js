const db = require('./../models/conectionDB');
const responseApi = require('./../utils/responseApi');

module.exports = {
    updateUser: async function (event) {
        const pool = await db.connDatabase();
        /*let resultSearch = await pool.request().query(`select * from usuarios where email = '` + event.body.email + `';`);
        if (resultSearch.recordsets.length == 1 && resultSearch.recordsets[0]) {*/
        const queryUser = `update usuarios set nombres='` + event.body.nombres + `', 
            apellidos='`+ event.body.apellidos + `', edad = ` + event.body.edad + `,
            email = '`+ event.body.email + `' where id=` + event.body.id;
        let result = await pool.request().query(queryUser);
        console.log('sadasdas:',result)
        if (result.rowsAffected.length > 0) {
            result = new responseApi(0, 'Success', result.recordset, 'success');
        } else {
            result = new responseApi(1, 'Failed', 'No results', 'failed');
        }
        /*} else {
            result = new responseApi(1, 'Failed', 'Email is exist', 'failed');
        }*/
        return result;
    }
}
