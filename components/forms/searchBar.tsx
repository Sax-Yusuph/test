import { useRouter } from 'next/dist/client/router'
import { useState, MouseEvent } from 'react'

export default function SearchBar() {
	const [searchText, setSearchText] = useState('')
	const router = useRouter()

	const handleSubmit = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		console.log(searchText)
		// replace(/\s/g, "+");
		router.push(
			`/product/${searchText}?&stores=aliexpress+jumia+konga+kara+ebay`
		)
		setSearchText('')
	}
	return (
		<div className='field-grouped'>
			<div className='control control-expanded'>
				<input
					className='search input '
					type='text'
					name='text'
					placeholder='enter an item&hellip;'
				/>
			</div>
			<div className='control'>
				<a
					className='button button-primary button-block button-shadow'
					href='#'
					onClick={handleSubmit}
				>
					Track it
				</a>
			</div>
			<style jsx>{`
				.search {
					padding: 1.5rem;
					border-radius: 10px;
				}
				.button-block {
					border-radius: 10px;
					padding: 1.5rem;
					align-items: center;
					justify-content: center;
					box-shadow: 0 12px 12px -11px #1a08b9b8;
				}
				.button-block:hover {
					box-shadow: 0 12px 20px -11px #0db4afb8;
					bottom: 30px;
				}
				.field-grouped {
					margin-top: 1.2rem;
				}
			`}</style>
		</div>
	)
}
