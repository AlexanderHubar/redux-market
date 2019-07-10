import React from 'react'

import {
  makeStyles,
  Paper,
  Typography,
  Grid
} from '@material-ui/core'

import GoodsList from '../GoodsList/GoodsList'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3),
  },
}));

const data = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    price: 120,
    img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ymumgd6znkzpo3ew95zq/air-zoom-structure-22-mens-running-shoe-1KqM5f.jpg'
  },
  {
    id: 2,
    name: 'Nike Free RN Flyknit 3.0',
    price: 130,
    img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/zwgg4mejfsi2jqw3zmps/free-rn-flyknit-3-mens-running-shoe-Qkpd3C.jpg'
  },
  {
    id: 3,
    name: 'Nike Zoom Pegasus Turbo',
    price: 180,
    img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/w6hk86vgrt8r31nyrvdt/zoom-pegasus-turbo-betrue-running-shoe-jTh2G3.jpg'
  },
  {
    id: 4,
    name: 'Nike Air Zoom Structure 22',
    price: 120,
    img: 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/sstkqs3xqxvokq3h8sgz/air-zoom-structure-22-mens-running-shoe-1KqM5f.jpg'
  },
]

const Shop = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} md={10}>
        <Paper className={classes.root}>
          <Typography variant="h5">Choose your goods</Typography>
          <GoodsList data={data}/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Shop