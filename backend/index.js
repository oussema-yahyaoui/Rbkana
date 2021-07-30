const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}
).then(() => console.log("cannected with DB  succsessfully "))
    .catch(err => console.log(err));

app.use(express.json())
app.use("backend/auth", authRoute)


app.listen(3000, () => {
    console.log("backend server is running in port 3000")
})