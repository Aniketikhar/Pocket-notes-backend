import mongoose from "mongoose";

export default function MongoConnect(url){
    return mongoose.connect(url);
}