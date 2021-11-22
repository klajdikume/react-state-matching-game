import React from 'react';
import './Button.css';

const Button = ({ startGame }) => ( <button onClick={startGame}>{ startGame ? 'reset' : 'start' }</button> )

export default Button
