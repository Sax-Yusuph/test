import cheerio from 'cheerio'
import { AliProducts, Product } from '../../interfaces'
import { v4 as uuidv4 } from 'uuid'
import { jumia } from '../selectors/selectors'

export const scrapJumia = (html: string) => {
  const $ = cheerio.load(html)
  const products = $(jumia.products)
  let jumiaProducts: Product[] = []

  // console.log(products.contents().length)

  // fs.writeFileSync('jumia.html', $.html())

  products.each(function (this: CheerioElement) {
    const productName = $(this).find(jumia.productName).text()
    const productLink = $(this).attr('href')
    const productStore =
      $(this).find('.shop-logo > span').text() || 'not provided'

    // const oldPrice = $(this).find(".info > .s-prc-w > .old").text();
    const price = $(this).find('.info > .prc').text()

    const official =
      $(this).find('.top-badge > img').attr('src') || 'not provided'
    const info = $(this).find('.info > .tag').text()
    const productImage = $(this).find('.img-c > img').attr('data-src')

    jumiaProducts.push({
      id: uuidv4(),
      websiteName: 'jumia',
      productName,
      productLink: `https://www.jumia.com.ng/${productLink}`,
      productImage,
      price,
      productStore,
      productAvailability: info,
      officialBadge: official,
      // shipping
    })
  })

  // console.log(jumiaProducts)
  return jumiaProducts
}

export const scrapKonga = (html: string) => {
  const $ = cheerio.load(html)
  const products = $('.a2cf5_2S5q5.cf5dc_3HhOq')
  const kongaProducts: Product[] = []

  products.each(function (this: CheerioElement) {
    const productName = $(this)
      .find('._4941f_1HCZm > a > .af885_1iPzH > h3')
      .text()
    const productLink = $(this).find('._4941f_1HCZm > a ').attr('href')
    const productStore =
      $(this).find('._4941f_1HCZm > form > ._7cc7b_23GsY').text() ||
      'not provided'

    // const oldPrice = $(this).find("._4e81a_39Ehs > .f6eb3_1MyTu").text();

    const price = $(this).find('._4e81a_39Ehs > .d7c0f_sJAqi').text()

    const official =
      $(this).find('.top-badge > img').attr('src') || 'not provided'
    const info = $(this).find('._4941f_1HCZm > form > ._09e22_1ojNd').text()
    // const infoAlt = $(this).find("._4941f_1HCZm > form > ._7c514_GMwE8").text();
    const productImage = $(this)
      .find('._7e903_3FsI6 > a > picture')
      .children()
      .first()
      .attr('data-srcset')

    kongaProducts.push({
      id: uuidv4(),
      websiteName: 'konga',
      productName,
      productLink: `https://www.konga.com${productLink}`,
      productImage,
      productStore,
      productAvailability: info,
      // pickUp: infoAlt,
      officialBadge: official,
      price,
    })
  })

  // console.log(kongaProducts)
  return kongaProducts
}

/*****************************
 SLOT NG
 **********************************************/
export const scrapSlot = (html: string) => {
  const $ = cheerio.load(html)
  const products = $('.product-inner')
  const slotProducts: Product[] = []

  products.each(function (this: CheerioElement) {
    const productName = $(this).find('.mf-product-content > h2').text()
    const productLink = $(this).find('.mf-product-thumbnail > a ').attr('href')!

    const price = $(this)
      .find('.mf-product-price-box> .price > .woocommerce-Price-amount.amount')
      .text()
    const productImage = $(this)
      .find('.mf-product-thumbnail > a > img')
      .attr('src')

    slotProducts.push({
      id: uuidv4(),
      websiteName: 'slot',
      productName,
      productLink,
      productImage,
      price,
    })
  })

  // console.log(slotProducts)
  return slotProducts
}

/*****************************
 FEMTECH IT  ************** not done yet !!!!!!!!
 **********************************************/
const scrapFemtech = (html: string) => {
  const $ = cheerio.load(html)
  const products = $('.product-inner')
  const femtechProducts: Product[] = []

  products.each(function (this: CheerioElement) {
    const productName = $(this).find('.mf-product-content > h2').text()
    const productLink = $(this).find('.mf-product-thumbnail > a ').attr('href')!

    const price = $(this)
      .find('.mf-product-price-box> .price > .woocommerce-Price-amount.amount')
      .text()
    const productImage = $(this)
      .find('.mf-product-thumbnail > a > img')
      .attr('src')

    femtechProducts.push({
      id: uuidv4(),
      websiteName: 'femtech',
      productName,
      productLink,
      productImage,
      price,
    })
  })

  // console.log(slotProducts)
  return femtechProducts
}

/*****************************
 KARA NG
 **********************************************/
export const scrapKara = (html: string) => {
  const $ = cheerio.load(html)
  const products = $('.product-item-info')
  const karaProducts: Product[] = []

  products.each(function (this: CheerioElement) {
    const productName = $(this).find('.product-item-name > a').text()
    const productLink = $(this).find('.product-item-name > a').attr('href')!

    const price = $(this).find('.price').text()
    const productImage = $(this).find('img.product-image-photo ').attr('src')

    karaProducts.push({
      id: uuidv4(),
      websiteName: 'kara',
      productName,
      productLink,
      productImage,
      price,
    })
  })

  // console.log(karaProducts)
  return karaProducts
}

/*****************************
 EBAY STORE
**********************************************/
export const scrapEbay = (html: string) => {
  const $ = cheerio.load(html)
  const products = $('.s-item__wrapper')
  const EbayProducts: Product[] = []

  products.each(function (this: CheerioElement) {
    const productName = $(this).find('.s-item__title').text()
    const productLink = $(this).find('.s-item__info > a ').attr('href')!
    const price = $(this)
      .find('.s-item__detail--primary > .s-item__price ')
      .text()

    const info = $(this).find('.s-item__subtitle > .SECONDARY_INFO').text()
    const shipping = $(this)
      .find('.s-item__detail--primary > .s-item__logisticsCost')
      .text()
    const infoAlt = $(this).find('.s-item__detail--secondary > span ').text()
    const productImage = $(this)
      .find('.s-item__image-wrapper > img')
      .attr('src')

    EbayProducts.push({
      id: uuidv4(),
      websiteName: 'ebay',
      productName,
      productLink,
      productImage,
      productAvailability: info,
      shipping,
      from: infoAlt,
      price,
    })
  })

  // console.log(EbayProducts)
  return EbayProducts
}

export const scrapAli = (products?: AliProducts[]) => {
  return products?.map((product) => ({
    id: uuidv4(),
    websiteName: 'ali express',
    productName: product.title,
    productLink: `https:${product.productDetailUrl.split('?')[0]}`,
    price: product.price,
    shipping: product.logisticsDesc,
    productAvailability: product.tradeDesc,
    productImage: `https:${product.imageUrl}`,
  }))
}
