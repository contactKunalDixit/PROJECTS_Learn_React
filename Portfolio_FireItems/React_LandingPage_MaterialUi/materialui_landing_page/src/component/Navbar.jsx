import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
	logoLg: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			backgroundColor: theme.palette.primary.main,
		},
	},
});

const Navbar = () => {
	const classes = useStyles();

	return (
		<>
			<AppBar>
				<Toolbar>
					<Typography variant='h6' component='h6' className={classes.logoLg}>
						Kunal Dev.
					</Typography>
					<Typography variant='h6' component='h6' className={classes.logoSm}>
						KUNAL
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
