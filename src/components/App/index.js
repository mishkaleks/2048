// base
import React from 'react'

// material-ui
import { makeStyles } from '@mui/styles'

// components
import Header from '../Header'
import GameBoard from '../GameBoard'
import Footer from '../Footer'

// helpers
import getRandomCell from '../../helpers/getRandomCell'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#faf8ef'
  }
}))

const App = () => {
  const classes = useStyles()

  const numbers = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  getRandomCell(numbers)
  getRandomCell(numbers)

  return (
    <div className={classes.root}>
      <Header />
      <GameBoard numbers={numbers} />
      <Footer />
    </div>
  )
}

export default App
