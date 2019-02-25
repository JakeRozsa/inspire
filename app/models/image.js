export default class Image {
  constructor(data) {
    this.image = data.url
    this._id = data.id
  }

  getTemplate() {
    return `
    ${this.image}
    `
  }
}