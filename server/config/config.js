module.exports = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    dbUrl: process.env.DB_URI,
    jwtSecret: process.env.JWTSECRET,
    jwtExpire: process.env.JWTEXPIRE,
};