import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://api.baasic.com/beta/mono-app/resources',
});

export const getCarMakes = async () => {
	const response = await api.get('/carMakes?rpp=100');
	return response.data;
};

