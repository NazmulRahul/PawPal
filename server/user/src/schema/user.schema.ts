import Joi from 'joi'

export interface userInput{
    name:string,
    email:string,
    password:string,
    isAdmin?:boolean
}

export const userSchema=Joi.object<userInput>({
    name:Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(4).required(),
    isAdmin:Joi.boolean().default(false)
})

