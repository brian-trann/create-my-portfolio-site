import React, { useContext } from 'react';
import MyInfoContext from '../context/MyInfoContext';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
	container        : {
		padding : theme.spacing(6, 0, 6)
	},
	category         : {
		padding : theme.spacing(4)
	},
	categoryBody     : {
		paddingTop  : theme.spacing(2),
		paddingLeft : theme.spacing(2)
	},
	aboutImage       : {
		maxWidth : '700px',
		display  : 'block',
		margin   : 'auto'
	},
	media            : {
		height : 140
	},
	mediaDescription : {
		paddingTop : theme.spacing(2)
	},
	aboutStatement   : {
		paddingTop    : theme.spacing(1),
		paddingBottom : theme.spacing(4)
	}
}));
const About = () => {
	const { about, other: { images } } = useContext(MyInfoContext);

	const { statement, skills, workExperience, education, certifications } = about;
	const classes = useStyles();
	return (
		<React.Fragment>
			<Container maxWidth='md' className={classes.container}>
				<Paper elevation={2}>
					{/* About */}
					<div className={classes.category}>
						<Typography variant='h4'>{about.categoryName}</Typography>
						<div className={classes.categoryBody}>
							<Typography variant='subtitle1' className={classes.aboutStatement}>
								{statement}
							</Typography>
						</div>

						{/* About Image */}
						{images.length > 0 && (
							<React.Fragment>
								<Card className={classes.aboutImage}>
									<CardMedia
										image={images[0].image.url}
										title={images[0].image.altText}
										className={classes.media}
									/>
								</Card>
								<Typography
									color='textSecondary'
									align='center'
									display='block'
									variant='caption'
									className={classes.mediaDescription}
								>
									{images[0].image.description}
								</Typography>
							</React.Fragment>
						)}
						{/* End About Image */}
					</div>
					<Container maxWidth='sm'>
						<Divider />
					</Container>
					{/* End About */}
					{/* Skills */}
					<div className={classes.category}>
						<Typography variant='h4'>{skills.categoryName}</Typography>
						<div className={classes.categoryBody}>
							{skills.items.map((skill, i) => (
								<div className={i} key={i}>
									<Typography variant='h6' gutterBottom>
										{skill.type}
									</Typography>
									<Typography>{skill.items.join(', ')}</Typography>
								</div>
							))}
						</div>
					</div>
					{/* EndSkills */}
					<Container maxWidth='sm'>
						<Divider />
					</Container>
					{/* Work Experience */}
					<div className={classes.category}>
						<Typography variant='h4'>{workExperience.categoryName}</Typography>
						<div className={classes.categoryBody}>
							{workExperience.work.map((w) => (
								<div key={w.company}>
									<Typography variant='h6' gutterBottom>
										{w.company}
									</Typography>
									<Typography gutterBottom>{w.position}</Typography>
									<Typography gutterBottom>{w.date}</Typography>
									<Typography gutterBottom>{w.description}</Typography>
								</div>
							))}
						</div>
					</div>
					{/* End Work Experience */}
					<Container maxWidth='sm'>
						<Divider />
					</Container>
					{/* Education*/}
					<div className={classes.category}>
						<Typography variant='h4'>{education.categoryName}</Typography>
						<div className={classes.categoryBody}>
							{education.items.map((e) => (
								<div key={e.name}>
									<Typography variant='h6' gutterBottom>
										{e.name}
									</Typography>
									<Typography gutterBottom>{e.curriculum}</Typography>
									<Typography gutterBottom>{e.date}</Typography>
									<Typography gutterBottom>{e.description}</Typography>
								</div>
							))}
						</div>
					</div>
					{/* End Education*/}
					<Container maxWidth='sm'>
						<Divider />
					</Container>
					{/* Certifications*/}
					<div className={classes.category}>
						<Typography variant='h4'>{certifications.categoryName}</Typography>
						<div className={classes.categoryBody}>
							<Typography>{certifications.items.join(', ')}</Typography>
						</div>
					</div>
					{/* End Certifications*/}
				</Paper>
			</Container>
		</React.Fragment>
	);
};
export default About;
