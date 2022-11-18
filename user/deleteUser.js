const db = require('./../models/conectionDB');
const responseApi = require('./../utils/responseApi');

module.exports = {
    deleteUser: async function (event) {
        const pool = await db.connDatabase();
        const queryUser = `delete from usuarios where id=`+event.params.id;
        let result = await pool.request().query(queryUser);
        if(result.rowsAffected.length > 0){
            result = new responseApi(0,'Success',result.recordset,'success');
        } else {
            result = new responseApi(1,'Failed','No results','failed');
        }
        return result;
    }
}
