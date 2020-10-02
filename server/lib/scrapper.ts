import { UserRequest } from '../../interfaces'
import getAllStoresData from './fetchStoresData'
// import { blockedResourceTypes, skippedResources } from "../utils/resource";
import { format_res } from './format_res'

export async function getStores(userRequest: UserRequest) {
  const urls = format_res(userRequest)
  const storesData = await getAllStoresData(urls.urls, urls.spaUrls)
  return storesData.flat()
}

// path to chrome
// C:\Users\user\AppData\Local\Google\Chrome\Application\chrome.exe
