import React, { useState } from 'react'
import {
  Card,
  CardActionArea,
  CardActions,
  makeStyles,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid
} from '@material-ui/core'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addItemToCart, removeItemFromCart } from '../../store/actions/cart'

const useStyles = makeStyles( theme => ({
  card: {
    margin: theme.spacing(3)
  },
}))

const Goods = ({ id, name, price, img, isAddButton, isRemove , ...props }) => {
  const classes = useStyles()
  const [showButton, setShowButton] = useState('add')
  const handleAddClick = () => {
    props.addItemToCart({ id, name, price, img })
    setShowButton('remove')
  }
  const handleRemoveClick = () => {
    props.removeItemFromCart(id)
    setShowButton('add')
  }

  return (
    <Grid item lg={3} xs={10} md={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="240"
            image={img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: {price} $
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {
            isAddButton && showButton === 'add' && (
              <Button size="small" color="primary" onClick={handleAddClick}>
                Add to Cart
              </Button>
            )
          }
          {
            showButton === 'remove' || isRemove ? (
              <Button size="small" color="secondary" onClick={handleRemoveClick}>
                Remove item
              </Button>
            ) : null
          }
        </CardActions>
      </Card>
    </Grid>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ addItemToCart, removeItemFromCart }, dispatch)

export default connect(null, mapDispatchToProps)(Goods)
