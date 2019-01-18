import React from 'react'

function Operator(props) {
    return (
        <button onClick={props.OnClick}>{props.operator}</button>
    )
}

export default Operator