import moment from 'moment'
export default {
  datetime: () => {
    moment.locale('th')
    return moment().format('L LT')
  },
  date: () => {
    moment.locale('th')
    return moment().format('L')
  },
  time: () => {
    moment.locale('th')
    return moment().format('LT')
  }
}
