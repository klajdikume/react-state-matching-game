import React from 'react'

import './Tile.css'

const Tile = (props) => {

  let selectedColor = props.selected || props.matched ? { backgroundColor: props.color } : null;

  return (
    <div className='Tile' style={ selectedColor }>
      {props.matched || props.selected ? <props.svg /> : null }
    </div>
  )
}

export default Tile
