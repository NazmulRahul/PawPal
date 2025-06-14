import express from 'express'
const Router = express.Router();
import multer from 'multer'
import { makeTransportRequest ,uploadFiles, getAllRequest, getUserRequest} from '../controller/transport.controller';

const upload = multer({ storage: multer.memoryStorage() });

Router.route('/')
  .get(getAllRequest)
  .post( makeTransportRequest);
Router.route('/doc').post(
    upload.fields([
      { name: 'vacFront', maxCount: 1 },
      { name: 'vacBack', maxCount: 1 },
      { name: 'standing', maxCount: 1 },
      { name: 'sitting', maxCount: 1 },
    ]),
    uploadFiles
  );
Router.route('/specific').get(getUserRequest)
export default Router;
