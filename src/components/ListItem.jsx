const ListItem = ({ item }) => {
	return (
		<div>
			<h2>{item.abbreviation}</h2>
			<p>{item.name}</p>
			<p>Item ID: {item.id}</p>
		</div>
	);
};

export default ListItem;

