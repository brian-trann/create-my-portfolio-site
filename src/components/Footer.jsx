import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MyInfoContext from '../context/MyInfoContext';

const useStyles = makeStyles((theme) => ({
	footer : {
		padding : theme.spacing(8)
	}
}));
const Footer = () => {
	const { navigation: { name } } = useContext(MyInfoContext);
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
				{name} {new Date().getFullYear()}
			</Typography>
		</footer>
	);
};
export default Footer;
