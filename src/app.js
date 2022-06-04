import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

const allowlist = [
  "http://*.heroku.com",
  "https://*.heroku.com",
  "http://localhost:4000",
  "http://0.0.0.0:4000",
  process.env.CLIENT_URL,
];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", routes);

export default app;
