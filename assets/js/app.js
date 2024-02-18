// URL base to make the GET request to the OpenWeatherMap API
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Event listener to the button with the id 'generate'
document.getElementById('generate').addEventListener('click', performAction);

function getApiKey() {
    return fetch('/api-key').then(res => res.json()).then(data => data.apiKey);
}

/**
 * Perform action when the button is clicked
 * @description Function to perform the action when the button is clicked
 * @param {Event} e - Event of the button click
 */
function performAction(e) {
    e.preventDefault();
    console.log('Button clicked!');

    const zipCode = document.getElementById('zip').value;
    console.log('Zip code:', zipCode);

    const feelings = document.getElementById('feelings').value;
    console.log('Feelings:', feelings);
    
    getApiKey().then(apiKey => {
        console.log("Chave da API:", apiKey);
        
        const fullUrl = `${baseUrl}${zipCode}&appid=${apiKey}&units=metric`;
        console.log('Full URL:', fullUrl);
        getWeatherData(fullUrl)
            .then((data) => {
                const postData = {
                    temperature: data.main.temp,
                    date: new Date().toLocaleDateString(),
                    userResponse: feelings
                };
                return postWeatherData('/add', postData);
            })
            .then(() => {
                // Update UI
                retrieveData();
            })
            .catch(error => {
                console.log("Erro: ", error);
            });
        });
}

/**
 * GET request to the OpenWeatherMap API
 * @description Function to make the GET request to the OpenWeatherMap API
 * @param {string} url - URL to make the GET request
 * @returns {Promise} - Promise object represents the data from the GET request
 */
const getWeatherData = async (url) => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Erro: ", error);
    }
};

/**
 * POST request to the server
 * @description Function to make the POST request to the server
 * @param {string} url - URL to make the POST request
 * @param {object} data - Data to send in the POST request
 * @returns {Promise} - Promise object represents the data from the POST request
 */
const postWeatherData = async (url = '', data = {}) => {
    const response = await fetch(`http://localhost:3000${url}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("Error: ", error);
    }
};

/**
 * Update UI
 * @description Function to update the UI with the data from the server
 */
const retrieveData = async () => {
    const request = await fetch('http://localhost:3000/all');
    try {
        const allData = await request.json();
        console.log('All data:', allData);
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature}°C`;
        document.getElementById('content').innerHTML = `Feeling: ${allData.userResponse}`;
    } catch (error) {
        console.log("Error: ", error);
    }
};
