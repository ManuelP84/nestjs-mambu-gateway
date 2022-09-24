export const EnvConfig = () => ({
    //App
    appPort: +process.env.PORT || 3001,
    //Mambu
    apyKey: process.env.APIKEY,
    baseUrl: process.env.BASE_URL,
    urlClients: process.env.URL_CLIENTS,
    urlLoans: process.env.URL_LOANS,
    urlDeposits: process.env.URL_DEPOSITS,
    // Postgres
    postgresPort: parseInt(process.env.POSTGRES_PORT),
    postgresUsername: process.env.POSTGRES_USERNAME,
    postgresPassword: process.env.POSTGRES_PASSWORD,
    postgresDb: process.env.POSTGRES_DB,
    // Mongo
    host: process.env.HOST,
    mongoConnection: process.env.MONGO_CONNECTION,
    mongoConnectionAtlas: process.env.MONGO_CONNECTION_ATLAS,
    // JWT
    key: process.env.KEY,
    refreshKey: process.env.REFRESH_KEY,
    atExpiresIn: process.env.AT_EXPIRES_IN,
    rtExpiresIn: process.env.RT_EXPIRES_IN,
})
