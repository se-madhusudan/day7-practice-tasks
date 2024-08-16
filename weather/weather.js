let btn = document.querySelector('#btn');
btn.addEventListener('click', getWeather);

async function getWeather() {
    const place = document.getElementById('place').value;
    const key = '98c185dce94d4ffdacb60040241608';
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${place}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const weatherData = await response.json();
            document.getElementById('weatherData').innerText = `${weatherData.current.temp_c}°C in ${place}`;
            document.getElementById('weatherData').style.color = 'greenyellow';
        } else {
            document.getElementById('weatherData').innerText = 'Failed to retrieve data';
            document.getElementById('weatherData').style.color = 'rgb(163, 24, 24)';
        }
    } catch (err) {
        console.error('Error making the API request:', err);
        document.getElementById('weatherData').innerText = 'Error making the API request';
        document.getElementById('weatherData').style.color = 'rgb(163, 24, 24)';
    }
}