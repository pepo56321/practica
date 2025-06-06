import express, { json } from 'express' 
import { moviesRouter} from './routes/movies.js'
import { corsMiddelware } from './middlewares/cors.js'

const app = express()
app.use(json())
app.use(corsMiddelware())
app.disable('x-powered-by')
// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

// Todos los recursos que sean MOVIES se identifica con /movies
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
