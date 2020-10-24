import { crawl } from '../server/lib/scrapper'
const userRequest = {
	item: 'iphone 6s',
	urls: ['konga', 'jumia', 'Slot', 'Ebay', 'Aliexpress'],
}

// async function
const results = crawl(userRequest)

fs.writeFile('./results.json', JSON.stringify(results, null, 3), err => {
	if (err) throw new err()
	console.log(results)
})
