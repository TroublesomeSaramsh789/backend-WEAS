import express from "express";
const userRoute = express.Router();

userRoute.post("/", (req, res) => {
  const dataReceived = {
    ...req.body,
  };
  console.log(dataReceived);
  res.send("Data Received");
});
export default userRoute;
