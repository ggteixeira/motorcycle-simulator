import { bring } from "./fetch.js"

const HASH = 'djgzh5X6IpXg2lew9a7oo'
const YEAR = 2018
const URL = `https://www.olx.com.br/_next/data/${HASH}/pt-BR/autos-e-pecas/motos/honda/cb/250/${YEAR}/estado-sp.json?f=c&me=40000&route=motos&route=honda&route=cb&route=250&route=2018&route=estado-sp`
const ARRAY = await bring(URL)

const meanCalculator = (array) => {
  const summation = array.reduce((previous, current) => {
    return current + previous
  }, 0)

  return summation / array.length
}

const prettifier = (priceMean, pricesArray) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(priceMean)

  return `- Unidades disponíveis: ${pricesArray.length} \n- Média: ${formattedPrice}\n`
}

console.log('Honda CB 250F Twister 2016: ')
console.log(prettifier(meanCalculator(ARRAY), ARRAY))

// console.log('Honda CB 250F Twister 2017:')
// console.log(prettifier(meanCalculator(), prices2017))
//
// console.log('Honda CB 250F Twister 2018:')
// console.log(prettifier(meanCalculator(prices2018), prices2018))
//
// console.log('Honda CB 250F Twister 2019:')
// console.log(prettifier(meanCalculator(prices2019), prices2019))
//
// console.log('Honda CB 250F Twister 2020:')
// console.log(prettifier(meanCalculator(prices2020), prices2020))
//
// console.log('Honda CB 250F Twister 2021:')
// console.log(prettifier(meanCalculator(prices2021), prices2021))
//
// console.log('Honda CB 250F Twister 2022:')
// console.log(prettifier(meanCalculator(prices2022), prices2022))

// console.log('-------------------------------\n')
const entrada = 8000

const divisor = (price, entrada) => {
  const parcelas = 12
  const division = (price - entrada) / parcelas

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

  const formattedDivision = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(division)

  return `(R$ ${formattedPrice} - R$ ${entrada}) / 12 = ${formattedDivision}\n`
}

// console.log(`Simulador de parcelamento 2016: \n${divisor(meanCalculator(bring(URL)), entrada)}`)

// console.log(`Simulador de parcelamento 2016: \n${divisor(meanCalculator(prices2016), entrada)}`)
// console.log(`Simulador de parcelamento 2017: \n${divisor(meanCalculator(prices2017), entrada)}`)
// console.log(`Simulador de parcelamento 2018: \n${divisor(meanCalculator(prices2018), entrada)}`)
// console.log(`Simulador de parcelamento 2019: \n${divisor(meanCalculator(prices2019), entrada)}`)
// console.log(`Simulador de parcelamento 2020: \n${divisor(meanCalculator(prices2020), entrada)}`)
// console.log(`Simulador de parcelamento 2021: \n${divisor(meanCalculator(prices2021), entrada)}`)
// console.log(`Simulador de parcelamento 2022: \n${divisor(meanCalculator(prices2022), entrada)}`)
//
