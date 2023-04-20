const { Sequelize } = require('sequelize');
const Product = require('./store.model');
const User = require('./user.model');


const {DB_NAME, DB_PASSWORD,DB_USERNAME,DB_HOST,DB_PORT} = process.env;

const sequelize = new Sequelize(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'postgres',
        port: Number(DB_PORT),
    }
);

Product.init(sequelize);
User.init(sequelize);


User.hasMany(Product,{
    as: 'products',
    foreignKey: {
        allowNull: false,
        name: 'userId',
    }
});

Product.belongsTo(User, {
    as: 'user',
    foreignKey: {
        allowNull: false,
        name: 'userId',
    }
});

(async () => {
    try{
        await sequelize.authenticate();
        console.log('db: connected successfully');

        await Promise.all([
            Product.sync({ force: false}).catch((e) =>{
                console.error('Product sync failed, reason: ', e)
            })
            // User.sync({ force: false}).catch((e) =>{
            //     console.error('user sync failed, reason: ', e)
            // })
        ])
    }catch(e) {
        console.log('db: error, reason', e)
    }
})();
module.exports = sequelize;
