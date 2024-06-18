import Axios from 'axios';

const fetchWithAxios = async (url: string) =>
	await Axios.get(url)
		.then((res) => {
			console.log(res);
			return Promise.resolve(res);
		})
		.catch((error) => {
			console.log(error);
			return Promise.reject(error);
		});

export default fetchWithAxios;
