import React, {useState, useEffect} from 'react'
import Bubble from './Bubble'
import {randomRange} from '../config/functions'

const BubbleNote = ({note, deleteNote,deleteStatus, editStatus, stageEdit, idPendingEdit}) =>{
    const [bubbleStats, setBubble] = useState({})

    useEffect(()=>{
        setBubble({
            ...note,
            pos: randomRange(10, 70)+ '%',
            wiggle: randomRange(2,180,true) + 'px',
            wiggleDur: randomRange(1500, 8000, true) + 'ms',
            duration: randomRange(8666, 64232, true) + 'ms',
            delayDist: -1* randomRange(293, 950, true) + 'px',
            z: 100
        })
    },{})

    
    return (
        <Bubble {...bubbleStats} deleteStatus={deleteStatus} deleteNote={deleteNote} editStatus={editStatus} stageEdit={stageEdit} idPendingEdit={idPendingEdit} ></Bubble>
    )
}

export default BubbleNote