export const convertToCurrency = (number) => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAN",
  }).format(number);
};
