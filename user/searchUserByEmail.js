const db = require('./../models/conectionDB');
const responseApi = require('./../utils/responseApi');

module.exports = {
    listUsersByEmail: async function (event) {
        const pool = await db.connDatabase();
        let result = await pool.request().query(`select * from usuarios where email = '`+event.body.email+`';`);
        if(result.recordsets.length == 1){
            result = new responseApi(0,'Success',result.recordset,'success');
        } else {
            result = new responseApi(1,'Failed','Email is exist','failed');
        }
        return result;
    }
}
