import { Sequelize } from "sequelize";
import sequelize from "../utils/database.js";

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


export default User;