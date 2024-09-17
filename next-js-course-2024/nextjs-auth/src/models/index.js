import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
})

//I fixed it by checking if the model exists then use it, else create it.
const User = mongoose.models.User || mongoose.model("User", UserSchema);
//const User = mongoose.model("User", UserSchema);

export default User;