import React from 'react'

import Button from '../Button'
import TileSelector from '../TileSelector'

const OptionsPanel = ({ numTiles, playing, startGame, handleNumTileChange }) => (
  <div>
    <TileSelector numTiles={numTiles} handleNumTileChange={handleNumTileChange} />
    <Button playing={playing} startGame={startGame} />
  </div>
)

export default OptionsPanel
