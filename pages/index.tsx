import Link from 'next/link'
import Layout from '../components/Layout'
import HomePageHeader from '../components/PageHeader/HomePageHeader'
import FeaturedProducts from '../components/Products/Featured'
import Trending from '../components/Products/Trending'

const IndexPage = () => (
	<Layout title='Home | Next.js + TypeScript Example'>
		<div className='header_bg'></div>
		<HomePageHeader />
		{/* <Categories/> */}
		<FeaturedProducts />
		{/* <Trending /> */}
	</Layout>
)

export default IndexPage
