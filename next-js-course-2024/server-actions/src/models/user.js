import mongoose from "mongoose"

const UeerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String
})