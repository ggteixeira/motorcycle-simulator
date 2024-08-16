export const divisor = (price, entrada) => {
  const parcelas = 12;
  const division = (price - entrada) / parcelas;

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  const formattedDivision = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(division);

  return `(R$ ${formattedPrice} - R$ ${entrada}) / 12 = ${formattedDivision}\n`;
};
