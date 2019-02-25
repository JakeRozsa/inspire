
export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.celcius = (this.kelvin) - 273
    this.fahrenheit = (this.celcius) * 1.8 + 32
    this.main = data.main
    this.icon = data.weather[0].icon
    this.img = "http://openweathermap.org/img/w/" + this.icon + ".png"
  }

  getTemplate() {
    return `
    <h4> Today's Forecast </h4>
    <br>
      <p> ${this.city} <br> ${Math.floor(this.fahrenheit)}° <img src="${this.img}">
      </p>
      
    `
  }
}