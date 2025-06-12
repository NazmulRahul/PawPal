import express from 'express'
const Router = express.Router();
import multer from 'multer'
import { makeTransportRequest } from '../controller/transport.controller';

const upload = multer({ storage: multer.memoryStorage() });

Router.route('/')
  .get()
  .post(
    upload.fields([
      { name: 'vacFront', maxCount: 1 },
      { name: 'vacBack', maxCount: 1 },
      { name: 'standing', maxCount: 1 },
      { name: 'sitting', maxCount: 1 },
    ]),
    makeTransportRequest
  );
export default Router;
