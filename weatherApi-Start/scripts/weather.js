// Select HTML Elements in the Document
const myTown = document.querySelector("#town");
const description = document.querySelector("#description");
const temperature = document.querySelector("#temperature");
const  myGraphic = document.querySelector("#graphic");

// Create Required Variable for the URL
const mykey = "354b339e4fd788cb8dc45ea932d4ba12"
const myLat = "9.0479285940647"
const myLong = "7.583733066727618"

// Construct a full path using template literals
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${mykey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display the JSON Data onto my Web page
function displayResults(data) {
    myTown.innerHTML = data.name;
    description.innerHTML = data.weather[0].description;
    temperature.innerHTML = `${data.main.temp}&degF`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('SRC', iconsrc),
    myGraphic.setAttribute('ALT', data.weather[0].description);
}

apiFetch(); 