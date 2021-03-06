import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	SwipeableDrawer,
	List,
	ListItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2),
		color: "grey"
	},
	title: {
		flexGrow: 1,
		color: "grey",
	},
	navbar: {
		backgroundColor: "white",
		boxShadow: theme.shadows[0],
		padding: 0,
		height: 90
	},
	menu: {
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	menuMobile: {
		color: "grey",
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	toolbar: {
		height: 100,
		marginRight: "10%",
		marginLeft: "10%"
	},
	menuItems: {
		fontSize: 18
	}
}))


const Navbar = () => {
	const classes = useStyles();
	const [click, setClick] = useState(false);
	const handleClick = () => {setClick(!click); console.log(click)};

	return (
		<AppBar position="static" className={classes.navbar}>
			<Toolbar className={classes.toolbar}>
				<IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
				<BuildIcon fontSize="large" />
				</IconButton>
				<Typography variant="h4" className={classes.title}>MJM Home Improvement</Typography>
				
				<div className={classes.menu}>
					<NavbarButton href="/" text="Home" />
					<NavbarButton href="/about-us" text="About us" />
					<NavbarButton href="/services" text="Services" />
					<NavbarButton href="/contact" text="Contact" />
				</div>
				<div className={classes.menuMobile}>
					<IconButton onClick={handleClick}>
						<MenuIcon fontSize="large"/>
					</IconButton>
					<SwipeableDrawer
						open={click}
						onClose={handleClick}
						onOpen={handleClick}
						>
						<List>
							<ListItem>
								<NavbarButton href="/" text="Home" />
							</ListItem>
							<ListItem>
								<NavbarButton href="/about-us" text="About us" />
							</ListItem>
							<ListItem>
								<NavbarButton href="/services" text="Services" />
							</ListItem>
							<ListItem>
								<NavbarButton href="/contact" text="Contact" />
							</ListItem>
						</List>
					</SwipeableDrawer>
					
						
				</div>
			</Toolbar>
		</AppBar>
	)
};


const NavbarButton = (props) => {
	const classes = useStyles();
	const color = (window.location.pathname === props.href) ? "orange" : "grey";

	return <Button className={classes.menuItems} style={{color: color}} href={props.href}>{props.text}</Button>
}



export default Navbar;