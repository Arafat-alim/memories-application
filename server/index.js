import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/posts.js";
const app = express();

//! we are using express js middleware
app.use("/posts", postRoutes);

//! both are used for post and put request
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//! connection of mongoDB
const CONNECTION_URL =
  "mongodb+srv://arafatalim:9903632928Af@cluster0.w06atei.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    // this code avoid any warning in the console
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`PORT is listening at ${PORT}`))
  )
  .catch((error) => console.log(error));

//For removing Warning purpose
// mongoose.set("useFindAndModify", false);
