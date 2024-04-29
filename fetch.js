export const bring = async (url) => {
  await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(({ pageProps }) => pageProps.ads.map(({ price }) => price))
    .then((pricesArray) => pricesArray.filter((price) => typeof price !== "undefined"))
    .then((definedPrices) => definedPrices.map((price) => price
      .replace(/\$/g, '')
      .replace(/\R/g, '')
      .replace('.', '')
      .trim()
    ))
    .then((cleanPrices) => cleanPrices.map((price) => parseFloat(price)))
    .then((formattedPrices) => console.log(formattedPrices))

}


