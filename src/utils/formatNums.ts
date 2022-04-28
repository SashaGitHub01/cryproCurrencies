import millify from "millify";

export const formatNums = (num: number, pres = 2) => {
   return millify(num, { precision: pres })
}