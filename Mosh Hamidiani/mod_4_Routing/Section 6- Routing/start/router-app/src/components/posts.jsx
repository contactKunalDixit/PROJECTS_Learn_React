import React from 'react';
import queryString from 'query-string';
const Posts = (props) => {
	const { match, location, history } = props;

	const result = queryString.parse(location.search);
	console.log(result);

	return (
		<div>
			<h1>Posts</h1>
			{`Year: ${match.params.Year}`} , {`Month: ${match.params.month}`}
		</div>
	);
};

export default Posts;
