# Weather Journal App ☀️🌧️

Welcome to the Weather Journal App! This application lets you keep a personal weather diary by combining data from the OpenWeatherMap API with your own personal notes.

## Features 🌟

- Retrieve real-time weather data using postal codes.
- Log and reflect on your personal feelings with the corresponding weather.
- Enjoy a clean and responsive user interface.

## How to Run ⚙️

Before running the application, ensure you have [Node.js](https://nodejs.org/) installed on your system.

1. Clone this repository to your local machine.
    ```sh
    git clone https://github.com/thaisaraujom/project-weather-journal-app.git
    ```
3. Create a .env in the /assets/js directory and add your OpenWeatherMap API key:
   ```
   API_KEY=your_api_key
   ```
4. Navigate to the project directory where the server.js file is located and start the server:
   ```sh
   node server.js
   ```
5. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## How to Use 🚀

1. Enter a valid postal code into the "Postal Code" input field.
2. Type in your current feelings or thoughts in the "How are you feeling today?" textarea.
3. Click on "Generate" to submit your input and fetch the weather data.

## Technologies Used 🛠️
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- OpenWeatherMap API

## License 📝
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
