import app from "./index.js";
import { connectUsingMongoose } from "./src/config/mongooseConfig.js";


app.listen(process.env.PORT, () => {
  console.log(`server is listening at port ${process.env.PORT}`);
  connectUsingMongoose();
});