import express from 'express'
import routes from './routes/routes'
import bodyParser from 'body-parser'

const app = express()

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

// app.get('/', (_req, res) => {
//     res.status(200).send('App ok')
// })

app.use(bodyParser.json())
app.use('/', routes)

// app.get('/teams', (_req, res) => {
//   const teams:string = 'Real Madrid'
//   res.send(teams)
// })