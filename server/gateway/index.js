import express from 'express'
import expressProxy from 'express-http-proxy'
import dotenv from 'dotenv'

dotenv.config()

const app=express()
const PORT=process.env.PORT
const IP=process.env.IP
const USER=process.env.USER_PORT
const ADOPTION=process.env.ADOPTION_PORT
const TRANSPORT=process.env.TRANSPORT_PORT

app.use('/user',expressProxy(`http://${IP}:${USER}`))
app.use('/adoption',expressProxy(`http://${IP}:${ADOPTION}`))

app.listen(PORT,IP,()=>{
    console.log(`Gateway server is runnin on http://${IP}:${PORT}`)
})