import connectDB from "./db/dbConnect.js";
import { app } from "./app.js";

// dotenv.config({
//     path: './env'
// })

// console.log(process.env.MONGODB_URI);

connectDB()
.then(() => {
    app.listen(process.env.PORT || 1218, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed !!!", err);
})