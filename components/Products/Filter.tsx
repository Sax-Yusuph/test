interface FilterProps {
	handleClick: (store: string) => void
}
export default function Filter({ handleClick }: FilterProps) {
	return (
		<section className='filter-section'>
			<div id='post-tags-filter-btn' className='primary-btn dark float-r'>
				Filter by tags
			</div>

			<div className='software-list'>
				<div
					id='post-software-filter-all'
					className='software-item active'
					onClick={() => handleClick('all')}
				>
					All
				</div>

				<div
					id='post-software-filter-photoshop'
					className='software-item sketch'
					onClick={() => handleClick('jumia')}
				></div>

				<div
					id='post-software-filter-photoshop'
					className='software-item photoshop'
					onClick={() => handleClick('konga')}
				></div>

				<div
					id='post-software-filter-principle'
					onClick={() => handleClick('kara')}
					className='software-item principle'
				></div>

				<div
					onClick={() => handleClick('ebay')}
					id='post-software-filter-figma'
					className='software-item figma'
				></div>

				<div
					onClick={() => handleClick('ali_express')}
					id='post-software-filter-xd'
					className='software-item xd'
				></div>

				<div
					onClick={() => handleClick('slot')}
					id='post-software-filter-studio'
					className='software-item studio'
				></div>
			</div>
			<style jsx>{`
				.filter-section {
					display: flex;
					justify-content: space-between;
					align-items: baseline;
				}
			`}</style>
		</section>
	)
}
