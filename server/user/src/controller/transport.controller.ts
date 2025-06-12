import uploadToCloudinary from "../utils/uploadToCloudinary";
import Transport from '../models/transport.model'

  export const makeTransportRequest = async (req:any, res:any) => {
  const owner = JSON.parse(req.body.owner);
  const pet = JSON.parse(req.body.pet);
  const travel = JSON.parse(req.body.travel);
  const agency = JSON.parse(req.body.agency);

  const files = req.files;
  const document:any = {};

  const keys = ['vacFront', 'vacBack', 'standing', 'sitting'];

  for (const key of keys) {
    const file = files[key]?.[0];
    if (!file) return res.status(400).json({ error: `${key} is missing` });

    const uploadRes:any = await uploadToCloudinary(file.buffer, `pawpal/${key}`);
    document[key] = uploadRes.secure_url;
  }

  const transport:any = await Transport.create({
    owner,
    pet,
    travel,
    agency,
    document,
  });

  return res.status(200).json({ transport });
};
