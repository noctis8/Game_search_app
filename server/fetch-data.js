
async function fetchGameList(apiUrl) {
    try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`HTTP error!, status: ${response.status}`)
        }
        let data = await response.json()
        console.log('Data fetched successfully:', data)
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export default fetchGameList
