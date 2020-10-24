import SearchBar from '../forms/searchBar'

export default function HomePageHeader() {
	return (
		<>
			{/* <div className='header_bg'></div> */}
			<section className='home-banner'>
				<div className='banner-content-container'>
					<h1 className='bold'>Pricetrack</h1>
					<p className='xs-font-size'>
						Compare prices of items in real time across different stores
						in the world.
					</p>
					<SearchBar />
				</div>
			</section>
			<style jsx>{`
				.header_bg {
					position: absolute;
					height: 50vh;
					width: 100vw;
					// background-color: #eee;
					background-image: url(/graphbg.png);
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
					// -webkit-filter: blur(10px) brightness(107%) saturate(104%);
					// filter: blur(20px) brightness(107%) saturate(104%);
					top: 0;
					left: 0;
					pointer-events: none;
				}

				.bold {
					margin-bottom: 10px;
					color: #fff;
				}
			`}</style>
		</>
	)
}
