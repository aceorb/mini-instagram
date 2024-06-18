const apiUrl = 'https://shibe.online/api/shibes?count=';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const standardHeaders = {
	'Content-Type': 'application/json'
	// 'Access-Control-Allow-Origin': '*'
};

export const getPictures = async (count = 16) =>
	await fetch(`${proxyUrl}${apiUrl}${count}`, {
		method: 'GET',
		headers: standardHeaders
	})
		.then((res) => res.json())
		.then((json) => {
			return json;
		})
		.catch((err) => {
			return err;
		});

// const result = await response.json();
// return result;
// return Promise.resolve(result);
