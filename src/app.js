import express from "express";
import cors from "cors";
//helmet is a library tos end headers for security
import helmet from "helmet";

//Routes

const app = express();
const port = 3500;

//Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

//Routes

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

app.listen(port, () => {
  console.log(`LISTINGING AT PORT ${port}`);
});
