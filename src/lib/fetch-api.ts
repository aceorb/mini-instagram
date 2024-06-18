const url = 'https://cors-anywhere.herokuapp.com/https://shibe.online/api/shibes?count=';
const standardHeaders = {
	'Content-Type': 'application/json'
};

export const getPictures = async (count = 16) =>
	await fetch(`${url}${count}`, {
		method: 'GET',
		headers: standardHeaders,
		referrerPolicy: 'no-referrer',
		mode: 'cors'
	})
		.then((res) => res.json())
		.then((json) => {
			console.log(json);
			return json;
		})
		.catch((err) => err);

// const result = await response.json();
// return result;
// return Promise.resolve(result);
