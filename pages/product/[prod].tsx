import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import useSWR from 'swr'
import Layout from '../../components/Layout'
import Results from '../../components/Products/Results'
import ProductDetailHeader from '../../components/Products/templates/ProductDetailHeader'
import { Product } from '../../interfaces'
import { crawl } from '../../server/lib/scrapper'
import {
	getAveragePrice,
	getHigestPrice,
	getLowestPrice,
	getPrices,
} from '../../utils/formatPrices'
// import { ProductMockData } from '../../utils/mockdata'

interface ProductDetailProps {
	res: Product[]
	error: any
	// query: string | string[]
}
interface swrProps {
	data: Product[]
	error: any
}
const fetcher = (url: string) => axios.get(url).then(res => res.data)
const stores =
	'stores=AliExpress&stores=Konga&stores=Jumia&stores=Kara&stores=Ebay&stores=Slot'

const mockProduct = {
	website: 'Konga',
	tag: 'cheapProducts',
	id: '8765',
	imgSrc: 'square-purple-2',
	title: 'Infinix Note 5s',
	link: '#',
	price: '55,500',
	description:
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?',
}

export default function ProductDetail({ res }: ProductDetailProps) {
	const router = useRouter()
	const { data, error } = useSWR(
		`/api/fetchProd/${router.query}?stores=${stores}`,
		fetcher,
		{
			initialData: res,
		}
	)
	console.log(data)
	let productInfo, prices, lowestPrice, highestPrice, averagePrice
	if (data) {
		productInfo = data[0]
		// prices = getPrices(data)
		// lowestPrice = getLowestPrice(prices)
		// highestPrice = getHigestPrice(prices)
		// averagePrice = getAveragePrice(prices)
	} else {
		productInfo = mockProduct
		prices = 4000
		lowestPrice = 5000
		highestPrice = 8000
		averagePrice = 5000
	}
	return (
		<Layout>
			<ProductDetailHeader
				productInfo={productInfo}
				prices={{ lowestPrice, highestPrice, averagePrice }}
			/>
			<Results products={data} />
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	// query { stores: [ 'aliexpress', 'ebay' ], prod: 'inifinix' }
	const urls =
		typeof query.stores !== 'string'
			? query.stores
			: ['Konga', 'Jumia', 'AliExpress', 'Kara', 'Ebay', 'Slot']

	const userRequest = {
		item: typeof query.prod === 'string' ? query.prod : 'test',
		urls,
	}
	try {
		const res = await crawl(userRequest)
		return {
			props: {
				res,
			},
		}
	} catch (err) {
		return { props: { statusCode: 500, message: err.message } }
	}
}
