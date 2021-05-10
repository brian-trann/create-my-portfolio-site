import React, { useContext } from 'react';
import MyInfoContext from '../context/MyInfoContext';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import genericUser from '../genericUser.svg';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	main           : {
		padding      : theme.spacing(8, 0, 6),
		marginBottom : theme.spacing(8)
	},
	cardsTitle     : {
		paddingBottom : theme.spacing(6)
	},
	cardGrid       : {
		paddingTop    : theme.spacing(8),
		paddingBottom : theme.spacing(8)
	},
	card           : {
		height        : '100%',
		display       : 'flex',
		flexDirection : 'column'
	},
	cardMedia      : {
		paddingTop : '56.25%'
	},
	cardContent    : {
		flexGrow : 1
	},
	profilePicture : {
		float       : 'right',
		marginRight : '2rem'
	},
	mainBlurb      : {
		paddingBottom : theme.spacing(2)
	}
}));
const Main = () => {
	const classes = useStyles();
	const { main, work } = useContext(MyInfoContext);
	return (
		<React.Fragment>
			{/** Main unit */}
			<div className={classes.main}>
				<Container maxWidth='md'>
					<div className={classes.profilePicture}>
						<img
							width='300px'
							src={main.profileImage.url || genericUser}
							alt={main.profileImage.altText}
						/>
					</div>
					<Typography
						component='h1'
						variant='h2'
						align='left'
						color='textPrimary'
						gutterBottom
					>
						{main.greeting}
					</Typography>
				</Container>
			</div>

			{/** End Main unit */}
			{/** Secondary unit */}
			<Container maxWidth='md'>
				<Typography
					className={classes.mainBlurb}
					variant='subtitle1'
					align='center'
					color='textSecondary'
					gutterBottom
				>
					{main.blurb}
				</Typography>

				<Divider />
			</Container>

			{/** End Secondary unit */}
			{/** Cards unit */}

			<Container maxWidth='md' className={classes.cardGrid}>
				<div className={classes.cardsTitle}>
					<Typography
						variant='h5'
						component='h3'
						align='center'
						color='textSecondary'
						gutterBottom
					>
						{work.categoryName}
					</Typography>
				</div>
				<Grid container spacing={4}>
					{work.projects.map((w) => (
						<Grid item key={w.projectName} xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image={w.image.url}
									title={w.image.altText}
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant='h5' component='h2'>
										{w.projectName}
									</Typography>

									<Typography variant='body2'>{w.description}</Typography>
								</CardContent>
								<CardActions>
									<Button
										size='small'
										color='primary'
										onClick={() => window.open(w.url)}
									>
										{work.buttonName}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
			{/** End Cards unit */}
		</React.Fragment>
	);
};
export default Main;
