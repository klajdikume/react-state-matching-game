import React from 'react'
import './TileSelector.css'
import useHover from '../../hooks';

const TileSelector = ({ numTiles, handleNumTileChange }) => {

  const [ ref, hovered ] = useHover();

  const dropdown = (
        <div className='tileSelectorContent' >
          <div className='number' onClick={() => handleNumTileChange(4)}>4</div>
          <div className='number' onClick={() => handleNumTileChange(16)}>16</div>
          <div className='number' onClick={() => handleNumTileChange(36)}>36</div>
        </div>
  )

 return (
   <div className='tileSelector'>
     <div>Number of Tiles</div>
     <div className='tileSelectorDropdown' ref={ref}>
       {numTiles} {dropdown}
     </div>
   </div>
 )
}

export default TileSelector
