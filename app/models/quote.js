
export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }

  getTemplate() {
    return `
    <h2 class="quote" onhover="app.controllers.quoteController.hover(${this.author})">"${this.quote}"</h2>
    `
  }
}