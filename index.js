const API_URL = document.getElementById('apiButton')
const apiData = document.getElementById('apiData')

const callAPI = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => {
        apiData.innertext = JSON.stringify(data)
    })
    .catch(e => console.error(new Error(e))); 
}

apiButton.addEventListener('click', callAPI );