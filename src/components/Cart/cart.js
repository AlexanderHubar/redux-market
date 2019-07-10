import React from 'react'
import {connect} from 'react-redux'

import { makeStyles, Paper, Typography, Grid } from '@material-ui/core'

import GoodsList from '../GoodsList/GoodsList'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3),
  },
}));

const Cart = ({ items }) => {
  const classes = useStyles()
  const total = items.reduce(( total, item ) => { return total += item.price }, 0)
  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} md={10}>
        <Paper className={classes.root}>
          <Typography variant="h5">Order</Typography>
          {
            items.length !== 0 ? (
              <>
                <GoodsList data={items} isAddButton={false} isRemove={true}/>
                <Typography variant="h6">Total price: {total} $</Typography>
              </>
            ): 'Please, add items to cart!'
          }
        </Paper>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = ({cart}) => ({
  items: cart.items
})

export default connect(mapStateToProps, null)(Cart)