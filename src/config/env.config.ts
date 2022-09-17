export const EnvConfig = () => ({
    appPort: +process.env.PORT || 3001,
    apyKey: process.env.APIKEY,
    baseUrl: process.env.BASE_URL,
    urlClients: process.env.URL_CLIENTS,
    urlLoans: process.env.URL_LOANS,
    postgresPort: +process.env.POSTGRES_PORT,
    postgresUsername: process.env.POSTGRES_USERNAME,
    postgresPassword: process.env.POSTGRES_PASSWORD,
    postgresDb: process.env.POSTGRES_DB,
    mongoConnection: process.env.MONGO_CONNECTION,
})
