import express from 'express'
import expressProxy from 'express-http-proxy'
import dotenv from 'dotenv'
import fs from 'fs'
dotenv.config()

const app=express()
const PORT=process.env.PORT
const IP=process.env.IP
const USER=process.env.USER_PORT
const ADOPTION=process.env.ADOPTION_PORT
const TRANSPORT=process.env.TRANSPORT_PORT

const logFilePath = 'ip-log.json';
let ipLog = [];
if (fs.existsSync(logFilePath)) {
  ipLog = JSON.parse(fs.readFileSync(logFilePath, 'utf-8'));
}

// Middleware to log unique IPs with timestamp
app.use('/user', (req, res, next) => {
  const clientIp = req.ip;
  const now = new Date();
  const ipEntries = ipLog.filter(log => log.ip === clientIp);
  
  // Find last log for this IP
  const existingEntry = ipLog.find(log => log.ip === clientIp);

  if (ipEntries.length === 0) {
    // No log yet for this IP, add it
    const logEntry = { ip: clientIp, time: now.toISOString() };
    ipLog.push(logEntry);
    fs.writeFileSync(logFilePath, JSON.stringify(ipLog, null, 2), 'utf-8');
    console.log(`Logged new IP: ${clientIp}`);
  } else {
    // Check time difference
    const existingEntry = ipEntries.sort((a, b) => new Date(b.time) - new Date(a.time))[0];

    const previousTime = new Date(existingEntry.time);
    const diffSeconds = (now - previousTime) / 1000;
    console.log(diffSeconds)
    if (diffSeconds >= 10) {
        console.log(diffSeconds)
        const logEntry = { ip: clientIp, time: now.toISOString() };
        ipLog.push(logEntry);
        fs.writeFileSync(logFilePath, JSON.stringify(ipLog, null, 2), 'utf-8');
        console.log(`Logged IP again after ${diffSeconds.toFixed(1)}s: ${clientIp}`);
    }
  }

  next();
}, expressProxy(`http://${IP}:${USER}`));


// app.use('/user',(req,res,next)=>{console.log(req.ip);next()},expressProxy(`http://${IP}:${USER}`))
app.use('/adoption',(req, res, next) => {
  const clientIp = req.ip;
  const now = new Date();
  const ipEntries = ipLog.filter(log => log.ip === clientIp);
  
  // Find last log for this IP
  const existingEntry = ipLog.find(log => log.ip === clientIp);

  if (ipEntries.length === 0) {
    // No log yet for this IP, add it
    const logEntry = { ip: clientIp, time: now.toISOString() };
    ipLog.push(logEntry);
    fs.writeFileSync(logFilePath, JSON.stringify(ipLog, null, 2), 'utf-8');
    console.log(`Logged new IP: ${clientIp}`);
  } else {
    // Check time difference
    const existingEntry = ipEntries.sort((a, b) => new Date(b.time) - new Date(a.time))[0];

    const previousTime = new Date(existingEntry.time);
    const diffSeconds = (now - previousTime) / 1000;
    console.log(diffSeconds)
    if (diffSeconds >= 10) {
        console.log(diffSeconds)
        const logEntry = { ip: clientIp, time: now.toISOString() };
        ipLog.push(logEntry);
        fs.writeFileSync(logFilePath, JSON.stringify(ipLog, null, 2), 'utf-8');
        console.log(`Logged IP again after ${diffSeconds.toFixed(1)}s: ${clientIp}`);
    }
  }

  next();
},expressProxy(`http://${IP}:${ADOPTION}`))

app.listen(PORT,IP,()=>{
    console.log(`Gateway server is runnin on http://${IP}:${PORT}`)
})