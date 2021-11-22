import React from 'react';
import './Button.css';

const Button = ({ startGame, playing }) => ( <button onClick={startGame}>{ playing ? 'reset' : 'start' }</button> )

export default Button
