// base
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// material-ui
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '100px',
    margin: '10px',
    borderRadius: '5px',
    background: '#c9bbae'
  },
  activeRoot: {
    background: '#eee4da'
  },
  number: {
    fontFamily: 'Goldman !important',
    fontSize: '48px !important',
    fontWeight: '600 !important',
    color: '#776e65 !important'
  }
}))

const GameCell = (props) => {
  const { number } = props
  const classes = useStyles()
  const isValue = number !== 0
  const value = isValue ? number : ''

  return (
    <div className={classNames(classes.root, isValue && classes.activeRoot)}>
      <Typography className={classes.number}>{value}</Typography>
    </div>
  )
}

GameCell.propTypes = {
  number: PropTypes.number.isRequired
}

export default GameCell
