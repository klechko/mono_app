import './App.css';
import { getCarMakes } from './common/api';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ListPage from './components/ListPage';

function App() {
	const [carMakes, setCarMakes] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	// console.log(carMakes);
	// console.log(searchResults);

	useEffect(() => {
		getCarMakes()
			.then((json) => {
				setCarMakes(json.item);
				// console.log(json.item);
				return json;
			})
			.then((json) => {
				setSearchResults(json.item);
			});
	}, []);

	return (
		<>
			<SearchBar
				carMakes={carMakes}
				setSearchResults={setSearchResults}
			/>
			<ListPage searchResults={searchResults} />
		</>
	);
}

export default App;
