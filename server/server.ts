import express, { Request, Response } from "express";
import config from 'config'
import log from "./src/utils/logger";
import connectDB from "./src/utils/dbConnect";


const app = express();
const PORT=config.get<number>('PORT')
const dbUri=config.get<string>('dbUri')

// Middleware
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

// Start Server
app.listen(PORT, async() => {
  log.info(`Server is running on port ${PORT}`);
  try{
    await connectDB(dbUri)
  }catch(e){
    log.error(e)
  }
});

