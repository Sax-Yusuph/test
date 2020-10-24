import axios from 'axios'
import { Product } from '../interfaces'

//************************ Get Prices */
export const getPrices = (data: Product[]) => {
	return data.map(item => item.actualPrice.value)
}

//************************ Get Highest Price */
export const getHigestPrice = (prices: any) => {
	return prices.reduce((a: number, b: number) => Math.max(a, b))
}
//************************ Get Lowest Price */
export const getLowestPrice = (prices: any) => {
	return prices.reduce((a: number, b: number) => Math.min(a, b))
}
//************************Get Average Price */
export const getAveragePrice = (prices: any) => {
	const totalPrice = prices.reduce((a: number, b: number) => a + b)
	return totalPrice / prices.length
}

//************************ change Price String to Number */

export const getActualPrice = (price: string) => {
	// if (!price) return
	const str = price.split('-')[0].match(/\d+/g)!
	if (price && price.includes('₦')) {
		const nairaPrice = parseFloat(str.join(''))
		return {
			value: nairaPrice,
			dollarPrice: convertToDollar(nairaPrice),
			currency: '₦',
		}
	} else if (price && price.includes('$')) {
		const dollarPrice = parseFloat(str.join(''))
		const NairaPrice = convertToNaira(dollarPrice)
		return {
			value: NairaPrice,
			dollarPrice,
			currency: '$',
		}
	} else {
		return {
			value: parseFloat(str.join('')),
			dollarPrice: parseFloat(str.join('')),
			currency: '',
		}
	}
}

interface Irate {
	USD: number
	NGN: number
}
interface IData {
	rates: Irate
}

//************************ Get dollar Rate *************************/
const getDollarRate = async () => {
	let currencyRate: Irate

	try {
		const item = localStorage.getItem('price_track_currency_rate')
		const cur_Rate: Irate = JSON.parse(item!)
		if (cur_Rate) {
			currencyRate = cur_Rate
		} else {
			const res = await axios.get(
				`http://data.fixer.io/api/latest?access_key=${process.env.FIXER_ACCESS_KEY}&base=USD&symbols=NGN,EUR`
			)
			const { rates }: IData = res.data
			currencyRate = { ...rates }
			localStorage.setItem(
				'price_track_currency_rate',
				JSON.stringify(currencyRate)
			)
		}
		return (currencyRate.NGN * 100) / (currencyRate.USD * 100)
	} catch (err) {
		if (err) throw new err()
		return 382
	}
}

//************************ Convert to Naira */
const convertToNaira = async (dollarPrice: number) => {
	const rate = await getDollarRate()
	if (rate) {
		return dollarPrice / rate
	} else {
		return dollarPrice
	}
}
//************************ Convert to Dollar */
const convertToDollar = async (nairaPrice: number) => {
	const rate = await getDollarRate()
	if (rate) {
		return nairaPrice * rate
	} else {
		return nairaPrice
	}
}
