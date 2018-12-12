import React, {useState, useEffect} from 'react'
import Bubble from './Bubble'
import {randomRange} from '../functions/functions'

const BubbleNote = props =>{
    const [bubbleStats, setBubble] = useState({})

    useEffect(()=>{
        setBubble({
            ...props.note,
            pos: randomRange(10, 70)+ '%',
            wiggle: randomRange(2,180,true) + 'px',
            wiggleDur: randomRange(1500, 8000, true) + 'ms',
            duration: randomRange(8666, 64232, true) + 'ms',
            delayDist: -1* randomRange(333, 750, true) + 'px'
        })
    },{})
    return (
        <Bubble {...bubbleStats}></Bubble>
    )
}

export default BubbleNote