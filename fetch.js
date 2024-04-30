// export const bring = async (url) => {
//   await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//     },
//   })
//     .then(async (response) => await response.json())
//     .then(({ pageProps }) => pageProps.ads.map(({ price }) => price))
//     .then((pricesArray) => pricesArray.filter((price) => price)) // filter null and other falsy values
//     // .then((pricesArray) => pricesArray.filter((price) => typeof price !== "undefined"))
//     .then((definedPrices) => definedPrices.map((price) => price
//       .replace(/\$/g, '')
//       .replace(/\R/g, '')
//       .replace('.', '')
//       .trim()
//     ))
//     .then((cleanPrices) => cleanPrices.map((price) => parseFloat(price)))
//     .then((formattedPrices) => console.log(formattedPrices))
//   // .then((formattedPrices) => formattedPrices)
//
// }

export async function bring(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })

  const motorcycleInfos = await response.json()
    // .then(async (response) => await response.json())
    .then(({ pageProps }) => pageProps.ads.map(({ price }) => price))
    .then((pricesArray) => pricesArray.filter((price) => price)) // filter null and other falsy values
    // .then((pricesArray) => pricesArray.filter((price) => typeof price !== "undefined"))
    .then((definedPrices) => definedPrices.map((price) => price
      .replace(/\$/g, '')
      .replace(/\R/g, '')
      .replace('.', '')
      .trim()
    ))
    .then((cleanPrices) => cleanPrices.map((price) => parseFloat(price)))
    .then((formattedPrices) => console.log(formattedPrices))

  return motorcycleInfos
}



