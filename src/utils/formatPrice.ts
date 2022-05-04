import numeral from 'numeral'

export const formatPrice = (num: number) => {
   if (!num) return NaN;
   return numeral(num).format('$0,000.00')
}