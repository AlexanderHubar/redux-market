import React from 'react'
import Goods from '../Goods/Goods'
import { Grid } from '@material-ui/core'

const GoodsList = ({data, isAddButton = true, isRemove}) => {
  return (
    <Grid container>
      {
        data.map((goods, index) => <Goods {...goods} isRemove={isRemove} isAddButton={isAddButton} key={index}/>)
      }
    </Grid>
  )
}

export default GoodsList