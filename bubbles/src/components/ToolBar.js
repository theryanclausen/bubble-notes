import React, {useState} from 'react'
import styled from 'styled-components'
import {Edit, Message, Pop} from '../config/Assets'

const Bar = styled.div `
    position:absolute;
    top: 25px;
    right: 10px;
    border-radius: 10px;
    background: teal;
    box-shadow: 10px 30px 5px #f3fbfefc;
    div{
        display:flex;
    }
`

const ToolBar = props =>{
    return(
    <Bar>
        <div>
            <Edit></Edit>
            <Message></Message>
            <Pop></Pop>
        </div>
    </Bar>
    )
}

export default ToolBar