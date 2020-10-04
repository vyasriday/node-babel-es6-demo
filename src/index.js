import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.json({"message": "Everything seems to be working alright"})
})

app.listen(4000, () => console.log("Listening on PORT 4000"))