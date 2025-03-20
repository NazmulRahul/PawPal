import bcrypt from 'bcrypt'
import config from 'config'

const saltValue=config.get<number>('saltValue')

export const passwordHashing=async(password:string):Promise<string>=>{
    const hashedPassword=await bcrypt.hash(password,saltValue)
    return hashedPassword
}