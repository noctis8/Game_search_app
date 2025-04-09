import fetchGameList from "./fetch-data.js"

async function tryCatch(apiUrl, res) {
    try {
        const data = await fetchGameList(apiUrl);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

export default tryCatch