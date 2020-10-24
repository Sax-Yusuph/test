import axios from 'axios'
import { Product } from '../../interfaces'
import {
  EbayProducts,
  JumiaProducts,
  KaraProducts,
  SlotProducts,
} from './models'

export function fetchStoresData(URL: string): Promise<Product[]> {
  return axios
    .get(URL)
    .then(function (response) {
      let uri = URL.split('.')[1].includes('ng/?s=')
        ? 'slot'
        : URL.split('.')[1]
      switch (uri) {
        case 'jumia':
          return new JumiaProducts(response.data)._scrappedProducts
        case 'ebay':
          return new EbayProducts(response.data)._scrappedProducts
        case 'slot':
          return new SlotProducts(response.data)._scrappedProducts
        case 'kara':
          return new KaraProducts(response.data)._scrappedProducts
      }
    })
    .catch(function (error) {
      return error.message
    })
}
