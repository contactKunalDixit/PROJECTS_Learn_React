import React from 'react';
import styled from 'styled-components';
import Home from './pages/Home';

const Container = styled.div`
	/* width: 90vw; */
`;

function App() {
	return (
		<Container>
			<Home></Home>
		</Container>
	);
}

export default App;
