import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { connect } from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger-output.json" assert { type: "json" };

const app = express();
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is running succesfully......");
    });
  })
  .catch((err) => {
    console.log(`database connection failes`, err);
  });

//middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.json("flow distribution program running succesfully");
});
// routes
import userRoute from "./routes/user.routes.js";
import AstrologerRoute from "./routes/astrologer.routes.js";

app.use("/api/user", userRoute);
app.use("/api/astrologer", AstrologerRoute);
