const mongoose = require('mongoose');
const MONGO_URL = "mongodb+srv://ImmortalNova2000:Nova2000@keplercluster.u1brvfz.mongodb.net/?retryWrites=true&w=majority&appName=KeplerCluster";

mongoose.connection.on('error', err => {
    console.error(err);
});

async function connectToMongo(){
    await mongoose.connect(MONGO_URL,{})
    .catch(err => console.log(err))
    .then(()=>console.log("Connected to MongoDB"));
}

async function disconnectToMongo(){
    await mongoose.disconnect()
    .catch(err => console.log(err))
}

module.exports = {connectToMongo , disconnectToMongo}