import express, { Request, Response } from "express";
import config from 'config'
import log from "./src/utils/logger";
import connectDB from "./src/utils/dbConnect";
import cors from 'cors'
import adoptionRoutes from './src/routes/adoption.route'
import dotenv, { configDotenv } from 'dotenv'
import cookieParser from "cookie-parser";
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from 'swagger-ui-express';

dotenv.config()

const app = express();
const PORT = config.get<number>('PORT')
const dbUri = config.get<string>('dbUri')
const ip = config.get<string>('ip')
const corsOption = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}

//swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Adoption API',
      version: '1.0.0',
      description: 'API documentation for adoption apis'
    },
    servers: [
      {
        url: `http://${ip}:5000/adoption/api`,
      },
    ],
  },
  apis: ['./src/routes/adoption.route.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware
app.use(express.json());
app.use(cors())
app.use(cookieParser())
// Routes
app.get("/adoption", (req: Request, res: Response) => {
  res.send("Adoption server working!");
});

app.use('/api', adoptionRoutes)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});
// Start Server
app.listen(PORT, ip, async () => {
  log.info(`Server is running on port ${PORT}`);
  try {
    await connectDB(dbUri)
  } catch (e) {
    log.error(e)
  }
});

