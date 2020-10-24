import { UserRequest } from '../../interfaces'
import { format } from './format'
import { fetchStoresData } from './stores'

module.exports = async function crawl(userRequest: UserRequest) {
	const urls = format(userRequest)
	const storesData = await Promise.allSettled([
		...urls.urls.map(fetchStoresData),
	])

	return storesData.flat()
}

//  getSPAStores(urls.spaUrls),
