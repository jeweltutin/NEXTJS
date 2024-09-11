import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String
});

//const User = mongoose.models.User;
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;