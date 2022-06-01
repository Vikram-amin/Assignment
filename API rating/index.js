const express = require('express')
const app = express();
const rateLimit = require('express-rate-limit')


const createLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 10, // Limit each IP to 5 create account requests per `window` (here, per hour)
  message:  "Too many accounts created from this IP, please try again after 10 minutes",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(createLimiter)


app.get('*', (req,res)=>{
    res.send("Response from server")
})

app.listen(8000, () =>{
    console.log("server Listening at port 8000")
})