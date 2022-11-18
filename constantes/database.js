module.exports = {
    credentialsDB: function () {
        const conn = {
            user: "admin",
            password: "123456",
            server: "localhost",
            database: "crud-iuvity",
            port: 1433,
            options: {
                encrypt: true, // for azure
                trustServerCertificate: true // change to true for local dev / self-signed certs
            }
        }
        return conn;
    }
}
