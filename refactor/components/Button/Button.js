import React from 'react';
import GameContext from '../../GameContext';
import './Button.css';

const Button = ({ startGame, playing }) => (
    <GameContext.Consumer>
        {
            (startGame, playing) => {
                <button onClick={startGame}>
                    { playing ? 'reset' : 'start' }
                </button> 
            } 
        }
    </GameContext.Consumer>
)

export default Button;
