import mongoose from "mongoose";

const connectDB = async () => {
    const connectionUrl = "mongodb+srv://jeweltutin:m0tLp7QWvxdq4HgX@cluster0.thdzvng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=blog-database";

    mongoose.connect(connectionUrl)
    .then(() =>  console.log("Blog database connection is successfull"))
    .catch((error) => console.log(error))
}

export default connectDB;