const mongoose = require('mongoose');

/**
 * Connect to MongoDB database using Mongoose
 * Uses connection string from environment variables
 */
const connectDB = async () => {
  try {
    // Connect to MongoDB - removed deprecated options
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    // Exit process with failure if database connection fails
    process.exit(1);
  }
};

module.exports = connectDB;
