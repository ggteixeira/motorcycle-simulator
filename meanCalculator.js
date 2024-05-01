
export const meanCalculator = (array) => {
  const summation = array.reduce((previous, current) => {
    return current + previous
  }, 0)

  return summation / array.length
}
