import { useEffect, useState } from 'react'
import { Product } from '../../interfaces'
import Filter from './Filter'
import PriceCard from './templates/PriceCard'

interface ResultsProps {
	products: Product[]
}
export default function Results({ products }: ResultsProps) {
	const [results, setResults] = useState(products)

	const handleClick = (store: string) => {
		if (store === 'all') {
			setResults(products)
		} else {
			const res = products.filter(product => product.websiteName == 'store')
			console.log(res)
			setResults(res)
		}
	}
	return (
		<section className='features section'>
			<div className='container'>
				<div className='features-inner section-inner'>
					<div className='features-header text-center'>
						<div className='container-sm'>
							<h3 className='section-title mt-0'>
								{results
									? `Found ${results.length} from 6 stores`
									: 'Loading Results'}
								<hr style={{ textAlign: 'left' }} />
							</h3>
						</div>
					</div>
					<Filter handleClick={handleClick} />
					<div className='result-products'>
						{results
							? results.map(product => (
									<PriceCard product={product} key={product.id} />
							  ))
							: Array(5).map(i => (
									<div
										key={i}
										style={{
											width: '100%',
											height: '300px',
											backgroundColor: '#eee',
										}}
									/>
							  ))}
					</div>
				</div>
			</div>
			<style jsx>{`
				.features-section {
					margin-top: 20px;
				}
				hr {
					width: 50px;
					border-top: 3px solid #4950f6;
					margin: 10px auto;
				}
				.result-products {
					clear: both;
					padding-top: 25px;
					max-width: 1450px;
					height: auto;
					// margin-bottom: 0 auto 50px;
					// margin-bottom: 0 auto 50px;
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
					grid-auto-flow: row dense;
					grid-gap: 15px;
				}
				@media (min-width: 900px) {
					.result-products {
						grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
					}
				}
			`}</style>
		</section>
	)
}
