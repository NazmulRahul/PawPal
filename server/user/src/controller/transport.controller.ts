import uploadToCloudinary from "../utils/uploadToCloudinary";
import Transport from '../models/transport.model'

  export const makeTransportRequest = async (req:any, res:any) => {
    const {userId, owner, pet, travel, agency, document } = req.body;

    if (!owner || !pet || !travel || !agency || !document) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    const transport = await Transport.create({
        userId,
        owner,
        pet,
        travel,
        agency,
        document,
    });

    return res.status(201).json({ transport });
};

export const uploadFiles = async (req:any, res:any) => {
    if (!req.files) {
      return res.status(400).json({ error: 'No files uploaded' });
    }
  
    const resultUrls:any = {};
    const keys = ['vacFront', 'vacBack', 'standing', 'sitting'];
    for (const key of keys) {
      const file = req.files[key]?.[0];
      if (!file) {
        return res.status(400).json({ error: `${key} is missing` });
      }
      try{
        const uploadRes:any = await uploadToCloudinary(file.buffer, `transport/${key}`);
        resultUrls[key] = uploadRes.secure_url;
      }catch(error){
        console.log(error)
        res.status(500).json
      }
     
    }
    return res.status(200).json({ urls: resultUrls });
  };

  
export const getAllRequest = async(req:any, res:any)=>{
    const transports = await Transport.find({})
    res.status(200).json({transports});
}

export const getUserRequest = async(req:any, res:any)=>{
    const {userId}=req.query;
    const transports = await Transport.find({userId})
    res.status(200).json({transports});
}