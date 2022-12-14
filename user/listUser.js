const db = require('./../models/conectionDB');
const responseApi = require('./../utils/responseApi');

module.exports = {
    listUsers: async function () {
        const pool = await db.connDatabase();
        let result = await pool.request().query("select * from usuarios;");
        if(result.recordsets.length > 0){
            result = new responseApi(0,'Success',result.recordset,'success');
        } else {
            result = new responseApi(1,'Failed','No results','failed');
        }
        return result;
    }
}
