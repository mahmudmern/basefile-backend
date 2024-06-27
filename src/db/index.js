import mongoose from 'mongoose';

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MANGODB_CONNECTION_URL)
        console.log('DB Connected')
    } catch (error) {
        
    }
}

export default  dbConnect 