// base
import React from 'react'

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

const GameBoard = () => {
  const classes = useStyles()

  const fields = [
    [], [], [], [],
    [], [], [], [],
    [], [], [], [],
    [], [], [], []
  ]

  return (
    <div className={classes.root}>
      {
        fields.map((field, index) => {
          console.log(field)
          return (
            <GameCell key={index} />
          )
        })
      }
    </div>
  )
}

export default GameBoard
