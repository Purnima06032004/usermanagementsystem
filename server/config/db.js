const mongoose=require("mongoose");
mongoose.set("strictQuery", false);
const connectDB=async()=>{
    try {
        mongoose.set("strictQuery", false);
        const conn=await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
    }
}  

module.exports=connectDB;   