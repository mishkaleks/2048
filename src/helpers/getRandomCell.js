// base
import _ from 'lodash'

const getRandomCell = (numbers) => {
  const copyNumbers = numbers.slice(0)
  const flatNumbers = _.flatten(copyNumbers)
  const zeroPosition = []

  const getEmptyPositions = () => {
    flatNumbers.forEach((number, index) => {
      if (number === 0) zeroPosition.push(index)
    })
    return zeroPosition
  }
  const emptyPositions = getEmptyPositions()

  const rand = Math.floor(Math.random() * emptyPositions.length)
  const currentIndex = zeroPosition[rand]
  const row = Math.floor(currentIndex / 4)
  const column = currentIndex - (row * 4)
  copyNumbers[row][column] = 2

  return copyNumbers
}

export default getRandomCell
