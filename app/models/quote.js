
export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }

  getTemplate() {
    return `
    <h2 id="quote-body">"${this.quote}"</h2>
    <h2 id="author">"${this.author}"</h2>
    `
  }
}