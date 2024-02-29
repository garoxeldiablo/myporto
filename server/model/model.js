import { Sequelize } from "sequelize";
import dbase from "../config/db.js";

const {DataTypes} = Sequelize

const cert = dbase.define('sertifikasi',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : DataTypes.STRING,
    company : DataTypes.STRING,
    link : DataTypes.STRING
},{ freezeTableName : true, 
    deletedAt: true
});

export {cert};

(async()=>{
    await dbase.sync();
})();