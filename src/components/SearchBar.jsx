const SearchBar = ({ carMakes, setSearchResults }) => {
	const handleSubmit = (e) => e.preventDefault();
	const handleSearchChange = (e) => {
		if (!e.target.value) return setSearchResults(carMakes);
		const results = carMakes.filter(
			(item) =>
				item.name
					.toLowerCase()
					.includes(e.target.value.toLowerCase()) ||
				item.abbreviation
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
		);
		setSearchResults(results);
	};
	return (
		<header>
			<form className="search" onSubmit={handleSubmit}>
				<input
					className="search__input"
					type="text"
					id="search"
					onChange={handleSearchChange}
				/>
			</form>
		</header>
	);
};

export default SearchBar;

