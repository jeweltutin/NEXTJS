import mongoose from "mongoose";

const connectToDB = async () => {
    const url = 'mongodb+srv://jeweltutin:m0tLp7QWvxdq4HgX@cluster0.thdzvng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=server-actions';

    mongoose.connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
}

export default connectToDB;