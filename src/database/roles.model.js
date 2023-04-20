const { Model, DataTypes } = require('sequelize');

class Roles extends Model {
    static init(connection) {
        super.init({
            title:{
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize: connection,
            timestamps: true,
            tableName: 'roles'
        });
    }
}

module.exports = Roles;