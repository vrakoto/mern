const mongoose = require('mongoose');
const generateFakeData = require('./generateFakeData');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/reunion');
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        // Supprimez la base de données 'reunion'
        await mongoose.connection.db.dropDatabase();
        console.log('Database "reunion" deleted successfully.');

        generateFakeData();

    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Arrêt du processus en cas d'échec de la connexion
    }
};

module.exports = connectDB;