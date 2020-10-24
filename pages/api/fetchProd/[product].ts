import { NextApiRequest, NextApiResponse } from 'next'
import { availableStores } from '../../../interfaces'
// import { crawl } from '../../../server/lib/scrapper'

interface myNextApiRequest extends NextApiRequest {
	query: {
		product: string
		stores: availableStores[]
	}
}

const fetchProd = async (_req: myNextApiRequest, res: NextApiResponse) => {
	try {
		if (!_req.query) throw new Error()

		const userRequest = {
			item: _req.query.product,
			urls: _req.query.stores,
		}
		// const results = await crawl(userRequest)
		res.json(results)
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message })
	}
}

export default fetchProd
