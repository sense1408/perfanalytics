const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://trendyol:tm3b0S9iNzgyephG@cluster0.1upom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
async function connectDB() {
  mongoose.connect(MONGO_URI, {useNewUrlParser: true});
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('DB connected!')
  });
}

module.exports = connectDB;