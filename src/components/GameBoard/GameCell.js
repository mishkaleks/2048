// base
import React from 'react'

// material-ui
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    width: '100px',
    height: '100px',
    margin: '10px',
    borderRadius: '5px',
    background: '#c9bbae'
  }
}))

const GameCell = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} />
  )
}

export default GameCell
