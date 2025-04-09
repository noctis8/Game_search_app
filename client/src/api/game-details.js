import config from "../api-config.js"

async function getGameDetails(gameId) {
    const apiBackendUrl = `${config.apiBackendUrl}game/${gameId}`
    console.log(apiBackendUrl);
    try {
        const response = await fetch(apiBackendUrl, {
            method: 'GET',
            credentials: 'include', 
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export default getGameDetails