import * as puppeteer from 'puppeteer'

import { AliProducts } from '../../interfaces'

import { blockedResourceTypes, skippedResources } from '../../utils/resource'
import { AliProduct, KongaProducts } from './models'

interface myWindow extends Window {
  runParams?: { items: AliProducts[] }
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
            await page.close()
            return new KongaProducts(html)._scrappedProducts
          case 'aliexpress':
            return await page.evaluate(async () => {
              let windowObj: myWindow = window
              const products = windowObj?.runParams?.items
              await page.close()
              return new AliProduct(products!)._scrappedProducts
            })
        }
      } catch (err) {
        if (err) throw new err()
        console.log(err.message)
      }
    })
  ).then((res) => {
    return res
  })

  await browser.close()

  return results
}

// path to chrome
// C:\Users\user\AppData\Local\Google\Chrome\Application\chrome.exe
