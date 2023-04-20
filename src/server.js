require('dotenv').config();
require('./database/connection');
const express = require('express');
const router = require('./routes');
const errorHandleMiddleware = require('./middlewares/errorHandlerMiddleware');
const errorConverterMiddleware = require('./middlewares/errorConverterMiddleware');
// const connectMongoDB = require('./database/mongoConnection');
// const transactionRoutes = require('./transaction/transactionRoutes');


const PORT = 5001;


const app = express();
app.use(express.json());
app.use('/api', router);
app.use(errorConverterMiddleware);
app.use(errorHandleMiddleware);
// app.use(connectMongoDB());
// connectMongoDB();
// app.use('/api', transactionRoutes);






app.listen(PORT, ()=> {
    console.log(`server is listening to port ${PORT}`)
})