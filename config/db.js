import Sequelize  from "sequelize";

const db = new Sequelize('baa6v3gkb4oakxfp58k5', 'u4udhvjqog9qhqk7', 'koHufySeqWx5nC15OGtl', {
    host: 'baa6v3gkb4oakxfp58k5-mysql.services.clever-cloud.com',
    dialect: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;