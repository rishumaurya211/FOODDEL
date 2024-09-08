import mongoose from "mongoose";

export const connectdb = async () => {
    await mongoose.connect('mongodb+srv://mauryarishu211:20135111@cluster0.nds8w.mongodb.net/food-del').then(() => {
        console.log("DB Connected");
    })
}