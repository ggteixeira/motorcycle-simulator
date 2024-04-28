export const bring = async (url) => {
  await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then((response) => {
      return response.json()
    })
    .then(({ pageProps }) => {
      console.log(pageProps.ads
        .map(({ price }) => {
          return price
            .replace(/\$/g, '')
            .replace(/\R/g, '')
            .replace('.', '')
            .trim()
        })
        .filter((price) => typeof price !== "undefined")
        .map((price) => parseFloat(price))
      )
    })
}

// bring(`https://www.olx.com.br/_next/data/${hash}/pt-BR/autos-e-pecas/motos/honda/cb/250/${year}/estado-sp.json?f=c&me=40000&route=motos&route=honda&route=cb&route=250&route=2018&route=estado-sp`)
