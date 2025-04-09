import express from "express"
import dotenv from "dotenv"
import cors from 'cors';
import tryCatch from './try-catch-api-utils.js';


const app = express()

dotenv.config()
app.use(cors({
    origin:  process.env.FRONTEND_URL,
    methods: 'GET', 
    credentials: true,
}));
app.use(express.json())

const PORT = process.env.PORT
const apiKey = process.env.API_KEY


app.get('/api/v1/game', async (req, res) => {
    const searchTerm = req.query.search;
    const apiUrl = `https://api.rawg.io/api/games?search=${searchTerm}&key=${apiKey}`
    await tryCatch(apiUrl, res)
})

app.get('/api/v1/game/:id', async (req, res) => {
    const searchTerm = req.params.id;
    const apiUrl = `https://api.rawg.io/api/games/${searchTerm}?key=${apiKey}`
    await tryCatch(apiUrl, res)
})


app.listen(PORT, () => {
    console.log("server is listening on port", PORT);
})
