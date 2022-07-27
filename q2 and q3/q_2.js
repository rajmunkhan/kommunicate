const queryString = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"

const urlParams = new URLSearchParams(queryString);
const utm_medium = urlParams.get('utm_medium')
console.log(utm_medium);

const utm_campaign = urlParams.get('utm_campaign')
console.log(utm_campaign);


