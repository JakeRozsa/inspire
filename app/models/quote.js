
export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }

  getTemplate() {
    return `
    <h2 class="quote">"${this.quote}" -${this.author}</h2>
    `
  }
}