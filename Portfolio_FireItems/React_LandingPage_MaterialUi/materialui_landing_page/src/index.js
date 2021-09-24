import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './Theme';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
