// var str = 'foo3,5bar5jhkj88'
// matches = str.match(/\d+/g)

// num = matches[0] + matches[1] + matches[2]

// console.log(matches)
// console.log(parseFloat(num))

// var str = '₦ 47,990'
// if (str && str.includes('₦')) {
//   const newStr = str.split('-')[0]
//   const matches = newStr.match(/\d+/g)
//   console.log(parseFloat(matches.join('')))
// }

// num = matches[0] + matches[1] + matches[2]

// console.log(matches)
// console.log(parseFloat(num))

const axios = require('axios')
const accessKey =
  process.env.FIXER_ACCESS_KEY || 'ee494e06bf479f7ce900d42c6494aa8e'
axios
  .get(
    `http://data.fixer.io/api/latest?access_key=${accessKey}&base=USD&symbols=NGN,EUR`
  )
  .then((response) => {
    const { rates } = response.data
    console.log(response.data)
  })
  .catch((err) => console.log(err.message))

const rates = {
  AED: 4.303912,
  AFN: 90.046007,
  ALL: 124.088239,
  AMD: 572.499761,
  ANG: 2.103604,
  AOA: 738.774147,
  ARS: 90.063203,
  AUD: 1.635546,
  AWG: 2.109069,
  AZN: 1.99655,
  BAM: 1.956807,
  BBD: 2.366142,
  BDT: 99.352797,
  BGN: 1.956401,
  BHD: 0.4418,
  BIF: 2268.42099,
  BMD: 1.171705,
  BND: 1.598459,
  BOB: 8.091948,
  BRL: 6.658922,
  BSD: 1.171915,
  BTC: 0.000111,
  BTN: 85.978101,
  BWP: 13.485678,
  BYN: 3.072747,
  BYR: 22965.419117,
  BZD: 2.36224,
  CAD: 1.559838,
  CDF: 2302.400861,
  CHF: 1.078891,
  CLF: 0.033529,
  CLP: 925.182897,
  CNY: 7.956937,
  COP: 4535.670276,
  CRC: 707.261256,
  CUC: 1.171705,
  CUP: 31.050184,
  CVE: 110.668004,
  CZK: 27.145365,
  DJF: 208.235884,
  DKK: 7.443144,
  DOP: 68.510055,
  DZD: 151.18501,
  EGP: 18.451,
  ERN: 17.575995,
  ETB: 43.123288,
  EUR: 1,
  FJD: 2.501637,
  FKP: 0.905935,
  GBP: 0.905946,
  GEL: 3.761631,
  GGP: 0.905935,
  GHS: 6.790078,
  GIP: 0.905935,
  GMD: 60.698837,
  GNF: 11424.124722,
  GTQ: 9.123289,
  GYD: 245.048627,
  HKD: 9.080808,
  HNL: 28.882985,
  HRK: 7.564181,
  HTG: 77.250551,
  HUF: 358.635938,
  IDR: 17402.00064,
  ILS: 4.019043,
  IMP: 0.905935,
  INR: 85.912466,
  IQD: 1393.743165,
  IRR: 49334.641838,
  ISK: 162.269886,
  JEP: 0.905935,
  JMD: 165.806038,
  JOD: 0.830785,
  JPY: 123.421599,
  KES: 127.109998,
  KGS: 93.136613,
  KHR: 4803.991145,
  KMF: 492.706425,
  KPW: 1054.534551,
  KRW: 1366.618643,
  KWD: 0.358835,
  KYD: 0.976613,
  KZT: 507.649981,
  LAK: 10820.69661,
  LBP: 1771.795916,
  LKR: 216.276894,
  LRD: 232.759657,
  LSL: 19.509336,
  LTL: 3.459741,
  LVL: 0.708753,
  LYD: 1.61114,
  MAD: 10.837146,
  MDL: 19.804926,
  MGA: 4569.650129,
  MKD: 61.64657,
  MMK: 1527.591608,
  MNT: 3348.207676,
  MOP: 9.35483,
  MRO: 418.29911,
  MUR: 46.680002,
  MVR: 18.056418,
  MWK: 878.779197,
  MXN: 25.344391,
  MYR: 4.87957,
  MZN: 84.802199,
  NAD: 19.509331,
  NGN: 448.181551,
  NIO: 40.600022,
  NOK: 10.932653,
  NPR: 137.56797,
  NZD: 1.767006,
  OMR: 0.45102,
  PAB: 1.171915,
  PEN: 4.247476,
  PGK: 4.105313,
  PHP: 56.806002,
  PKR: 192.866992,
  PLN: 4.503507,
  PYG: 8186.296697,
  QAR: 4.266223,
  RON: 4.869962,
  RSD: 117.621657,
  RUB: 91.618669,
  RWF: 1118.978329,
  SAR: 4.394932,
  SBD: 9.568924,
  SCR: 21.064001,
  SDG: 64.824627,
  SEK: 10.465908,
  SGD: 1.598118,
  SHP: 0.905935,
  SLL: 11500.285531,
  SOS: 683.104445,
  SRD: 16.584358,
  STD: 24645.423926,
  SVC: 10.254383,
  SYP: 599.974643,
  SZL: 19.509322,
  THB: 36.991162,
  TJS: 12.093893,
  TMT: 4.100968,
  TND: 3.240355,
  TOP: 2.698613,
  TRY: 9.107082,
  TTD: 7.954475,
  TWD: 33.902158,
  TZS: 2718.356125,
  UAH: 33.225357,
  UGX: 4341.767857,
  USD: 1.171705,
  UYU: 49.917203,
  UZS: 12097.855105,
  VEF: 11.702409,
  VND: 27174.183682,
  VUV: 131.947783,
  WST: 3.107134,
  XAF: 656.309919,
  XAG: 0.049413,
  XAU: 0.000617,
  XCD: 3.166592,
  XDR: 0.830847,
  XOF: 655.5732,
  XPF: 119.889288,
  YER: 293.336787,
  ZAR: 19.322659,
  ZMK: 10546.755769,
  ZMW: 23.491931,
  ZWL: 377.289416,
}

// console.log(rates.length)
Object.size = function (obj) {
  var size = 0,
    key
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++
  }
  return size
}
console.log(Object.size(rates))

// conevrsion

const rate = { USD: 1.171705, NGN: 448.181551 }

const getDollarRate = (rate) => (rate.NGN * 100) / (rate.USD * 100)

console.log({ dollar_rate: getDollarRate(rate).toFixed(2) })
