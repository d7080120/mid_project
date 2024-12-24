<<<<<<< HEAD
const allowedOrigins = [
   'http://localhost:3000'
=======
const allowedOrigins = ['http://localhost:3000'
>>>>>>> 51abc03662a76c10b66fa9f9fb1cf441b6ce9e21
   ]
    const corsOptions = {
    origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 ||
    !origin) {
    callback(null, true)
    } else {
    callback(new Error('Not allowed by CORS'))
    }
    },
    credentials: true,
    optionsSuccessStatus: 200
    }
    module.exports = corsOptions