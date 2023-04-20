const mongoose = require('mongoose');

const connectMongoDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Connected to MongoDB');
};

module.exports = connectMongoDB;
