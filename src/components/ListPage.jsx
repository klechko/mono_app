import ListItem from './ListItem';

const ListPage = ({ searchResults }) => {
	const results = searchResults.map((item) => (
		<ListItem key={item.id} item={item} />
	));
	const content = results.length ? (
		results
	) : (
		<div>
			<p>No Matching Posts</p>
		</div>
	);

	return <main>{content}</main>;
};

export default ListPage;

