import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  let quote = _qs.quotes
  // @ts-ignore
  document.getElementById('quote').innerHTML = quote.getTemplate()
  $('#author').hide();
  $("#quote").hover(function () {
    $('#author').show();
  })
  $("#quote").mouseleave(function () {
    $('#author').hide();
  })

}


export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quotes', drawQuote)
    _qs.getQuotes()
  }
}
