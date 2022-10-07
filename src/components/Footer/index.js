// base
import React from 'react'

// material-ui
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    maxWidth: '500px',
    margin: '30px 0'
  },
  title: {
    fontFamily: 'Goldman !important',
    fontSize: '32px !important',
    fontWeight: '600 !important',
    color: '#776e65'
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography component="div" className={classes.title}>Reset</Typography>
    </div>
  )
}

export default Footer
