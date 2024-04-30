export async function bring(url) {
  const response = fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })

  const motorcycleInfos = response
    .then((response) => response.json())
    .then((data) => data)
    .then(({ pageProps }) => pageProps.ads.map(({ price }) => price))
    .then((pricesArray) => pricesArray.filter((price) => price)) // filter null and other falsy values
    .then((definedPrices) => definedPrices.map((price) => price
      .replace(/\$/g, '')
      .replace(/\R/g, '')
      .replace('.', '')
      .trim()
    ))
    .then((cleanPrices) => cleanPrices.map((price) => parseFloat(price)))
    .then((formattedPrices) => formattedPrices)

  return motorcycleInfos
}



