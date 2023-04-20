const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(connection) {
        super.init({
            title:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            userId:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            price:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            soldAt:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            deletedAt:{
                type: DataTypes.DATE,
                allowNull: true,
            }
        },
        {
            sequelize: connection,
            timestamps: true,
            tableName: 'products'
        });
    }
}

module.exports = Product;