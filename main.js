function ShowQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let len = data.length;
      let random = Math.trunc(Math.random() * len);
      let quote = data[random].text;
    })
    .catch();

  return quote;
}

document.addEventListener("load", ShowQuote());
