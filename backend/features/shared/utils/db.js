import mongoose from 'mongoose';

import env from 'dotenv'

env.config();

const mongoURI = process.env.MONGO_URI

const connectToMongo = async () => {
  
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoURI);

        console.log('Mongo connected')
    }catch(error) {
        console.log(error)
        process.exit()
    }
}
export default connectToMongo;