import React from 'react'
import Button from 'react-bootstrap/Button'

const ButtonComp = (props) => {
    return (
        <div>
            <Button href={'/' + props.direct} className={props.name}>{props.name}</Button> 
        </div>
    )
}

export default ButtonComp;