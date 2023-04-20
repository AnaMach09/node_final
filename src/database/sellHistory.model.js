const { Model, DataTypes } = require('sequelize');

class sellHistory extends Model {
    static init(connection) {
        super.init({
            title:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            price:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            productId:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            sellerId:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            buyerId:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
           
        },
        {
            sequelize: connection,
            timestamps: true,
            tableName: 'sellhistory'
        });
    }
}

module.exports = sellHistory;