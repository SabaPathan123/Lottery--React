import React, { useState } from 'react';
import Ball from './Ball.jsx';
import './Lottery.css';

function Lottery(props){
    
    const [num, setNum] = useState(Array.from({length : props.maxBalls}));
    
    function handleClick(){
        setNum(() => {
            return num.map(n => Math.floor(Math.random()*props.maxNum)+1);
        })
        
    }

    return(<section className='Lottery'>
        <h1>{props.title}</h1>
        <div className="Lottery-container">
            {
              num.map(n => <Ball num={n} />)
            }  
        </div>
        <button onClick={handleClick}>Generate</button>
    </section>)

}

export default Lottery;