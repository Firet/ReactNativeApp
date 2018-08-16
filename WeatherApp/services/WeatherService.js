var WeatherService = {}
const API_KEY = "242495eebc4f7126f24b0b39ca00f4c7"

WeatherService.getWeather = async() => {
    navigator.geolocation.getCurrentPosition(async (location) => {
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);
        let weather={};
        let url = "http://api.openweathermap.org/data/2.5/weather?lat=" + location.coords.latitude + "&lon=" + location.coords.longitude + "&APPID=" + API_KEY
        console.log(url)
        try{
            let weather = await(await fetch(url)).json()
            console.log(weather)
        }catch(e){
            console.log(e)
            weather = {
                main: {
                    temp: 0
                },
                weather: [
                    {
                        main: "Error"
                    }
                ]
            }
        }

        return weather
    })
}

export default WeatherService