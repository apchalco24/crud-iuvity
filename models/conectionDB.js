const sqlServer = require('mssql');
const credConn = require('./../constantes/database')

module.exports = {
    connDatabase: async function() {
        try{
            const pool = await sqlServer.connect(credConn.credentialsDB());
            return pool;
        } catch (error){
            console.log(error);
        }
    }
}
