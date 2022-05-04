import millify from "millify";

export const formatNums = (num: number, pres = 2) => {
   if (!num) return NaN;
   return millify(num, { precision: pres })
}