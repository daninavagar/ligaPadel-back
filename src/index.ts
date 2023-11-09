import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/routes'
import cors from './plugins/cors'

dotenv.config()

const app = express()

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.use(cors);

app.use('/', routes)