import mongoose, {ConnectOptions} from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let isConnected = false;

export const connectTodb = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    const mongoDBURI: string = process.env.MongoDBURI || 'defaultMongoDBURI'; // Provide a default value or handle undefined

    try {
        await mongoose.connect(mongoDBURI, {
            dbName: "post_new"
        });

        isConnected = true;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
