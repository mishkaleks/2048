// base
import React from 'react'
import classNames from 'classnames'

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
    flexGrow: 1,
    marginRight: '10px !important',
    fontFamily: 'Goldman !important',
    fontSize: '60px !important',
    fontWeight: '600 !important',
    color: '#776e65',
    textAlign: 'center'
  },
  pointsBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100px',
    borderRadius: '5px',
    padding: '5px 0',
    background: '#C9BBAE'
  },
  scoreBox: {
    marginRight: '10px'
  },
  boxTitle: {
    fontFamily: 'Goldman !important',
    fontSize: '20px !important',
    color: '#eee4da'
  },
  points: {
    fontFamily: 'Goldman !important',
    fontSize: '30px !important',
    color: '#fff'
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography component="div" className={classes.title}>2048</Typography>
      <div className={classNames(classes.pointsBox, classes.scoreBox)}>
        <Typography className={classes.boxTitle}>Score</Typography>
        <Typography className={classes.points}>0</Typography>
      </div>
      <div className={classes.pointsBox}>
        <Typography className={classes.boxTitle}>Best</Typography>
        <Typography className={classes.points}>0</Typography>
      </div>
    </div>
  )
}

export default Header
