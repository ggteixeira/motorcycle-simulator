export async function bring(year) {
  const HASH = 'UL0sCmtaY4kjm815zt450'
  const URL = `https://www.olx.com.br/_next/data/${HASH}/pt-BR/autos-e-pecas/motos/honda/cb/250/${year}/estado-sp.json?f=c&me=40000&mf=1&route=motos&route=honda&route=cb&route=250&route=${year}&route=estado-sp`

  const response = fetch(URL, {
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



