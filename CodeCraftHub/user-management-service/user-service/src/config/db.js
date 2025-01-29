const dotenv = require('dotenv');
dotenv.config();  // This must be called before accessing environment variables

const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        // Ensure the MONGODB_URI is being loaded from the environment
        console.log('MONGODB_URI:', process.env.MONGODB_URI);  // This will help debug

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);  // Exit on failure
    }
};

module.exports = connectDB;
