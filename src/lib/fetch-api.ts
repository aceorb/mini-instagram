import config from '../utils/config';

/**
 * Function getPictures(count:number)
 * This function provides functionality of fetching images from https://shibe.online/ API
 *
 * @param count specifies how many images should be fetched from api
 *
 * caveats:
 * 1. This API has CORS filtering and therefore must be proxied by some CORS provider that will set CORS
 * Allow-Origin to the caller address. Otherwise the browser will not allow to consume data from this api
 */

export const getPictures = async (count = Number(config.defaultFetchCount)) =>
	await fetch(`${config.proxyUrl}${config.apiUrl}${count}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
		.then((res) => res.json())
		.then((json) => json)
		.catch((err) => err);
