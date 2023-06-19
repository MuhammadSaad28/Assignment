function adv() {
    let temp = +document.querySelector("#temp").value;

    if (temp > 30) {
        document.querySelector("#res").innerHTML = `• It's very hot! Make sure to stay hydrated by drinking plenty of water.<br>
        • Avoid prolonged exposure to the sun, especially during the peak hours of the day. <br>
        • Wear lightweight and breathable clothing to stay cool. <br>
        • Seek shade or air-conditioned spaces when possible. <br> <br>
        
        Remember, these are general guidelines, and personal preferences and specific circumstances may vary. It's always a good idea to check the local weather forecast for more accurate information tailored to your area.`
    }
    else if (temp > 25 && temp <= 30) {
        document.querySelector("#res").innerHTML = `• It's warm! Consider wearing light and comfortable clothing. <br>
        • Stay hydrated by drinking water regularly. <br>
        • Use sunscreen to protect your skin from sunburn. <br>
        • Enjoy outdoor activities but take breaks in shaded areas to cool down. <br> <br>
        
        Remember, these are general guidelines, and personal preferences and specific circumstances may vary. It's always a good idea to check the local weather forecast for more accurate information tailored to your area.`
    }
    else if (temp > 15 && temp <= 25) {
        document.querySelector("#res").innerHTML = `• It's a moderate temperature range! This is generally considered pleasant weather. <br>
        • Dress according to your comfort level and the specific conditions. <br>
        • Enjoy outdoor activities or take advantage of the pleasant weather. <br> <br>
        
        Remember, these are general guidelines, and personal preferences and specific circumstances may vary. It's always a good idea to check the local weather forecast for more accurate information tailored to your area.`
    }
    else {
        document.querySelector("#res").innerHTML = `• It's cool or cold! Dress warmly with layers to stay comfortable. <br>
        • Consider wearing a jacket, sweater, or coat, depending on the severity of the cold. <br>
        • Protect yourself from wind and precipitation if applicable. <br>
        • Stay warm indoors or engage in activities suitable for the colder weather. <br> <br>
        
        Remember, these are general guidelines, and personal preferences and specific circumstances may vary. It's always a good idea to check the local weather forecast for more accurate information tailored to your area.`
    }


}