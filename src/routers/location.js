import express from "express";
const locationRoute = express.Router();

locationRoute.post("/post", (req, res) => {
  const dataReceived = {
    location: {
      province: req.body.location.province,
      district: req.body.location.district,
    },
  };
  console.log(dataReceived);
  res.send("Loaction Received");
});
export default locationRoute;
