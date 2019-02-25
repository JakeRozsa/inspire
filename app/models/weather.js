
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
  }

  getTemplate() {
    return `
    <h4> Today's Weather Report </h4>
    <br>
      <p> ${Math.floor(this.fahrenheit)} Fahrenheit <br>
      ${this.city} </p>
    `
  }
}