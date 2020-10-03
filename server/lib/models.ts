import cheerio from 'cheerio'
import { jumia } from '../selectors/selectors'

export class JumiaProducts {
  products
  constructor(html: string) {
    this.products = cheerio.load(html)
  }

  products() {
    return cheerio.load(this.html).find(jumia.products)
  }
}
