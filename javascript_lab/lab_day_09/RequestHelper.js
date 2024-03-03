function sendRequest(url) {
  return fetch(url).then(function (reponse) {
    return reponse.json();
  });
}

module.exports = { sendRequest };
