const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            firstName:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            balance:{
                type: DataTypes.NUMBER,
                allowNull: false,
                defaultValue: 0,
            },
            email: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            roledIn: {
                type:DataTypes.INTEGER,
                // allowNull: false,
            },
            deletedAt:{
                type: DataTypes.DATE,
                allowNull: true,
            }
        },
        {
            sequelize: connection,
            timestamps: true,
            tableName: 'users'
        });
    }
}

module.exports = User;