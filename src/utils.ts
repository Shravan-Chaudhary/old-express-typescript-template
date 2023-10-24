export const calculateDiscountedPrice = (
  price: number,
  percentage: number
): number => {
  return price - (price * percentage) / 100
}
