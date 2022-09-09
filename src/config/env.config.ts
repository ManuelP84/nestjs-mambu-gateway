export const EnvConfig = () => ({
    port: process.env.PORT || 3001,
    apyKey: process.env.APIKEY,
    baseUrl: process.env.BASE_URL,
    url: process.env.URL,
})
