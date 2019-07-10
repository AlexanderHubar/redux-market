import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  makeStyles
} from '@material-ui/core'
import ShoppingIcon from '@material-ui/icons/ShoppingBasket'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  icon: {
    marginLeft: 'auto'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}));

const Navbar = ({ items }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/" className={classes.link}>
            <Typography variant="h6" color="inherit">
              Market
            </Typography>
          </Link>
            <IconButton className={classes.icon} aria-label="Show 4 new mails" color="inherit">
                <Badge badgeContent={items.length} color="secondary">
                  <Link to="/cart" className={classes.link}>
                    <ShoppingIcon/>
                  </Link>
                </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = ({ cart }) => ({
  items: cart.items
})

export default connect(mapStateToProps, null)(Navbar)