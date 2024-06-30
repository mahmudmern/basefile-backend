import app from "./app.js";
import dbConnect from "./db/index.js";

let PORT = process.env.PORT || 8000;

dbConnect();

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
