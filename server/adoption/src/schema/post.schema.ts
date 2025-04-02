import Joi from 'joi'
import mongoose, { Document, Schema } from 'mongoose';

interface IAddress {
    name: string;
    city: string;
    phone: string;
    email: string;
    location: string;
}

interface IPost extends Document {
    userId: mongoose.Types.ObjectId;
    animalType: string;
    breed?: string;
    name?: string;
    description: string;
    age?: number | null;
    sex?: string;
    vaccine?: string[] | string;
    image: string[] | string;
    address: IAddress;
    isAdopted?: boolean;
    adoptedBy?: string;
}

const addressSchema = Joi.object<IAddress>({
    name: Joi.string().required(),
    city: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    location: Joi.string().required(),
});

export const postSchema = Joi.object<IPost>({
    userId: Joi.string().hex().length(24).required(), // MongoDB ObjectId validation
    animalType: Joi.string().required(),
    breed: Joi.string().default("Unknown").optional(),
    name: Joi.string().default("Pet").optional(),
    description: Joi.string().required(),
    age: Joi.number().allow(null).optional(), // Allow null
    sex: Joi.string().default("Unknown").optional(),
    vaccine: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.string().default("Unknown")).optional(),
    image: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.string().default("Unknown")).required(),
    address: addressSchema.required(),
    isAdopted: Joi.boolean().default(false).optional(),
    adoptedBy: Joi.string().default("Unknown").optional(),
});
