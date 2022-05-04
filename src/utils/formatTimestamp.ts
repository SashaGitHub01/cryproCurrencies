import moment from "moment";

export const formatTimestamp = (time: number) => {
   return moment.unix(time).format('DD/MM/YYYY hh:mm')
}