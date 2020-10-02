import puppeteer from 'puppeteer-core'
import axios from 'axios'
import { AliProducts, Product } from '../../interfaces'
import {
  scrapJumia,
  scrapEbay,
  scrapSlot,
  scrapKara,
  scrapKonga,
  scrapAli,
} from './scrapStore'
import { blockedResourceTypes, skippedResources } from '../../utils/resource'

interface myWindow extends Window {
  runParams?: { items: AliProducts[] }
}

export function fetchStoresData(URL: string): Promise<Product[]> {
  return axios
    .get(URL)
    .then(function (response) {
      let uri = URL.split('.')[1].includes('ng/?s=')
        ? 'slot'
        : URL.split('.')[1]
      switch (uri) {
        case 'jumia':
          return scrapJumia(response.data)
        case 'ebay':
          return scrapEbay(response.data)
        case 'slot':
          return scrapSlot(response.data)
        case 'kara':
          return scrapKara(response.data)
      }
    })
    .catch(function (error) {
      return error.message
    })
}

const getSPAStores = async (SPA_Store_Urls: string[]) => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      // "--proxy-server=" + proxy,
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1920x1080',
    ],
    executablePath:
      'C:\\Users\\user\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe',
  })

  let results = await Promise.allSettled(
    SPA_Store_Urls.map(async (url) => {
      const page = await browser.newPage()
      // await page.setUserAgent(userAgent);

      // PAGE SETTINGS ***************************************
      await page.setRequestInterception(true)
      page.on('request', (request) => {
        const requestUrl = request.url().split('?')[0].split('#')[0]
        if (
          blockedResourceTypes.indexOf(request.resourceType()) !== -1 ||
          skippedResources.some(
            (resource) => requestUrl.indexOf(resource) !== -1
          )
        ) {
          request.abort()
          // console.log(`blocked ----- ${requestUrl}`)
        } else {
          console.log(requestUrl)
          request.continue()
        }
      })

      // NAVIGATE TO THE PAGE VIA PUPPETEEER
      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 })
        console.log('puppeteer launched')
        switch (url.split('.')[1]) {
          case 'konga':
            let html = await page.content()
            console.log(`captured konga url: ${url}`)
            await page.close()
            return { konga: scrapKonga(html) }
          case 'aliexpress':
            return await page.evaluate(async () => {
              let windowObj: myWindow = window
              const products = windowObj?.runParams?.items
              await page.close()
              return scrapAli(products)
            })
        }
      } catch (error) {
        console.log(error.message)
      }
    })
  ).then((res) => {
    return res
  })

  await browser.close()

  return results
}

export default function getAllStoresData(URLs: string[], SPAUrls: string[]) {
  return Promise.allSettled([
    ...URLs.map(fetchStoresData),
    getSPAStores(SPAUrls),
  ])
}

// path to chrome
// C:\Users\user\AppData\Local\Google\Chrome\Application\chrome.exe
