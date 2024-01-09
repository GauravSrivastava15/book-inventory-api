import mongoose from 'mongoose';


const connectionURL = process.env.MONGODB_URI

export const connectUsingMongoose = async () => {
    try {
        
        await mongoose.connect(connectionURL , {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
    }
}

