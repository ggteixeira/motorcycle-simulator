export const prettifier = (priceMean, pricesArray) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceMean);

  return `- Unidades à venda: ${pricesArray.length} \n- Média de preço: ${formattedPrice}\n`;
};
