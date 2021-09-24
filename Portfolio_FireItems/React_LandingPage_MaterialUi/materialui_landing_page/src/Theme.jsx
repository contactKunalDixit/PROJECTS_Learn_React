import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const Theme = createTheme();

Theme.palette.primary = { main: '#4dd0e1' };
Theme.palette.secondary = {
	main: '#4e0de4',
};
Theme.typography.h2 = {
	fontSize: '5rem',
};

export default Theme;
