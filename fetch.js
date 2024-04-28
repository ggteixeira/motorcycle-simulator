const bring = async (url) => {
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
        .map(({ price }) => price)
        .filter((price) => typeof price !== "undefined"))
    })
}

const hash = 'djgzh5X6IpXg2lew9a7oo'
const year = 2018

bring(`https://www.olx.com.br/_next/data/${hash}/pt-BR/autos-e-pecas/motos/honda/cb/250/${year}/estado-sp.json?f=c&me=40000&route=motos&route=honda&route=cb&route=250&route=2018&route=estado-sp`)
