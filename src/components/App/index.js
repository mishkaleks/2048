// base
import React from 'react'

// material-ui
import { makeStyles } from '@mui/styles'

// components
import Header from '../Header'
import GameBoard from '../GameBoard'
import Footer from '../Footer'

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

  return (
    <div className={classes.root}>
      <Header />
      <GameBoard />
      <Footer />
    </div>
  )
}

export default App
