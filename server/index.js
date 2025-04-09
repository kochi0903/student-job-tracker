import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import rateLimit from "express-rate-limit";
import jobRoute from "./routes/job.routes.js";
dotenv.config({});

const app = express();

// Trust proxy headers securely
app.set('trust proxy', 'loopback, linklocal, uniquelocal');

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});
app.use(limiter);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});
app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
    allowedHeaders: true,
  })
);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>
  res.json({ message: "Server Running", success: true })
);

app.use("/api", jobRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
