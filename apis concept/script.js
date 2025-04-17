async function getWeather() {
    const city = document.getElementById("city").value.trim();
  
    if (!city) {
      document.getElementById("result").innerText = "Please enter a city name.";
      return;
    }
  
    const apiKey = "4f989c4e90f942a8a1553532250904"; // Your actual API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      document.getElementById("result").innerText =
        `${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}`;
    } catch (error) {
      document.getElementById("result").innerText = "Could not fetch weather data.";
    }
  }
  