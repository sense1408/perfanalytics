const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://trendyol:tm3b0S9iNzgyephG@cluster0.1upom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI, {useNewUrlParser: true});
        console.log('DB connected');
    } catch(e) {
        console.error(e.message);
        process.exit(1);
    }
}

module.exports = connectDB;