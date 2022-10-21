// base
import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@mui/styles'

// components
import GameCell from './GameCell'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '480px',
    padding: '10px',
    borderRadius: '5px',
    background: '#bbada0'
  }
}))

const GameBoard = (props) => {
  const { numbers } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {
        numbers.map(row => {
          return row.map((number, index) => {
            return (
              <GameCell key={index} number={number} />
            )
          })
        })
      }
    </div>
  )
}

GameBoard.propTypes = {
  numbers: PropTypes.array.isRequired
}

export default GameBoard
