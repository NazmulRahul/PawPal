import express, { Request, Response } from "express";
import config from 'config'
import log from "./src/utils/logger";
import connectDB from "./src/utils/dbConnect";
import cors from 'cors'
import userRoutes from './src/routes/user.route'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT=config.get<number>('PORT')
const dbUri=config.get<string>('dbUri')
const corsOption={
  origin:"*",
  methods: ["GET", "POST"],    
  allowedHeaders: ["Content-Type", "Authorization"]
}
// Middleware
app.use(express.json());
app.use(cors(corsOption))

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.use('/api/user',userRoutes)

// Start Server
app.listen(PORT, async() => {
  log.info(`Server is running on port ${PORT}`);
  try{
    await connectDB(dbUri)
  }catch(e){
    log.error(e)
  }
});

