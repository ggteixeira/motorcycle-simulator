import { bring } from "./fetch.js"

const ARRAY2016 = await bring(2016)
const ARRAY2017 = await bring(2017)
const ARRAY2018 = await bring(2018)
const ARRAY2019 = await bring(2019)
const ARRAY2020 = await bring(2020)
const ARRAY2021 = await bring(2021)
const ARRAY2022 = await bring(2022)

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

  return `- Unidades à venda: ${pricesArray.length} \n- Média de preço: ${formattedPrice}\n`
}

console.log('Honda CB 250F Twister 2016: ')
console.log(prettifier(meanCalculator(ARRAY2016), ARRAY2016))

console.log('Honda CB 250F Twister 2017:')
console.log(prettifier(meanCalculator(ARRAY2017), ARRAY2017))

console.log('Honda CB 250F Twister 2018:')
console.log(prettifier(meanCalculator(ARRAY2018), ARRAY2018))

console.log('Honda CB 250F Twister 2019:')
console.log(prettifier(meanCalculator(ARRAY2019), ARRAY2019))

console.log('Honda CB 250F Twister 2020:')
console.log(prettifier(meanCalculator(ARRAY2020), ARRAY2020))

console.log('Honda CB 250F Twister 2021:')
console.log(prettifier(meanCalculator(ARRAY2021), ARRAY2021))

console.log('Honda CB 250F Twister 2022:')
console.log(prettifier(meanCalculator(ARRAY2022), ARRAY2022))

console.log('-------------------------------\n')
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


console.log(`Simulador de parcelamento 2016: \n${divisor(meanCalculator(ARRAY2016), entrada)}`)
console.log(`Simulador de parcelamento 2017: \n${divisor(meanCalculator(ARRAY2017), entrada)}`)
console.log(`Simulador de parcelamento 2018: \n${divisor(meanCalculator(ARRAY2018), entrada)}`)
console.log(`Simulador de parcelamento 2019: \n${divisor(meanCalculator(ARRAY2019), entrada)}`)
console.log(`Simulador de parcelamento 2020: \n${divisor(meanCalculator(ARRAY2020), entrada)}`)
console.log(`Simulador de parcelamento 2021: \n${divisor(meanCalculator(ARRAY2021), entrada)}`)
console.log(`Simulador de parcelamento 2022: \n${divisor(meanCalculator(ARRAY2022), entrada)}`)
