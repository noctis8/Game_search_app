import express from "express"
import dotenv from "dotenv"
import cors from 'cors';
import fetchGameList from "./fetch-data.js"


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
    console.log(req.query)
    const searchTerm = req.query.search;
    console.log(`from server: ${searchTerm}`);
    const apiUrl = `https://api.rawg.io/api/games?search=${searchTerm}&key=${apiKey}`
    let data = await fetchGameList(apiUrl);
    res.status(200).json(data)
})


app.listen(PORT, () => {
    console.log("server is listening on port", PORT);
})
