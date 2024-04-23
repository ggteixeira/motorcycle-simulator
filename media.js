const prices2016 = [
  16900, 16000, 15900, 15500, 15300
]
const prices2017 = [
  18000, 17900, 17899, 17500, 17000, 16900
]
const prices2018 = [
  19900,
  18900,
  18800,
  18500,
  18490,
  18290,
  17990,
  17700,
  17500,
  17200,
  16900,
  16300,
  16000,
  15900,
  15880,
  15500
]
const prices2019 = [
  19800,
  19500,
  19000,
  19000,
  19000,
  18990,
  18700,
  18600,
  18490,
  18290,
  17999,
  17990,
  17590,
  17500
]
const prices2020 = [
  19700,
  22980,
  20990,
  20990,
  20890,
  20500,
  20499,
  20000,
  19999,
  19990,
  19750,
  19500,
  19300,
  19200,
  19000,
  18999,
  18990,
  18500,
  18499,
  17990,
  17800,
  17300,
  16800
]
const prices2021 = [
  23000,
  22900,
  22700,
  22000,
  21990,
  21900,
  21500,
  21000,
  20999,
  20990,
  20890,
  20500,
  20490,
  20290,
  20000,
  19990,
  19990,
  19900,
  19800,
  19690,
  18480
]
const prices2022 = [
  23000,
  23000,
  22990,
  22990,
  22900,
  22800,
  22500,
  22490,
  22000,
  21990,
  22899,
  21800,
  21500,
  21490,
  21200,
  21000,
  20999,
  20990,
  20600,
  20590,
  20500,
  20490,
  19990,
  19900
]

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

  return `- Quantidade: ${pricesArray.length} \n- Média: ${formattedPrice}\n`
}

// Preços CB 250F Twister (2016)
console.log('Honda CB 250F Twister 2016: ')
console.log(prettifier(meanCalculator(prices2016), prices2016))

// Preços CB 250F Twister (2017)
console.log('Honda CB 250F Twister 2017:')
console.log(prettifier(meanCalculator(prices2017), prices2017))

//
// // Preços CB 250F Twister (2018)
// console.log('Honda CB 250F Twister 2018:')
// console.log(meanCalculator(prices2018))
//
// // Preços CB 250F Twister (2019)
// console.log('Honda CB 250F Twister 2019:')
// console.log(meanCalculator([
//   19800,
//   19500,
//   19000,
//   19000,
//   19000,
//   18990,
//   18700,
//   18600,
//   18490,
//   18290,
//   17999,
//   17990,
//   17590,
//   17500]))

// Preços CB 250F Twister (2020)
// console.log('Honda CB 250F Twister 2020:')
// console.log(meanCalculator([
//   19700,
//   22980,
//   20990,
//   20990,
//   20890,
//   20500,
//   20499,
//   20000,
//   19999,
//   19990,
//   19750,
//   19500,
//   19300,
//   19200,
//   19000,
//   18999,
//   18990,
//   18500,
//   18499,
//   17990,
//   17800,
//   17300,
//   16800]))

// Preços CB 250F Twister (2021)
// console.log('Honda CB 250F Twister 2021:')
// console.log(meanCalculator([
//   23000,
//   22900,
//   22700,
//   22000,
//   21990,
//   21900,
//   21500,
//   21000,
//   20999,
//   20990,
//   20890,
//   20500,
//   20490,
//   20290,
//   20000,
//   19990,
//   19990,
//   19900,
//   19800,
//   19690,
//   18480]))
//
// Preços CB 250F Twister (2022)
// console.log('Honda CB 250F Twister 2022:')
// console.log(meanCalculator([
//   23000,
//   23000,
//   22990,
//   22990,
//   22900,
//   22800,
//   22500,
//   22490,
//   22000,
//   21990,
//   22899,
//   21800,
//   21500,
//   21490,
//   21200,
//   21000,
//   20999,
//   20990,
//   20600,
//   20590,
//   20500,
//   20490,
//   19990,
//   19900]))

// console.log('-------------------------------')
// console.log('Simulação de parcelamento:')
//
// const divisor = (price, entrada) => {
//   const division = (price - entrada) / 12
//
//   const formattedDivision = new Intl.NumberFormat('pt-BR', {
//     style: 'currency',
//     currency: 'BRL'
//   }).format(division)
//
//   return `(R$ ${price} - R$ ${entrada}) / 12 = ${formattedDivision}`
// }
//
// console.log(divisor(17553, 8000))
