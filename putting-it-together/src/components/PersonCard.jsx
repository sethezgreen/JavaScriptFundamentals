import React, { useState } from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(Number(props.age))

    const handleClick = () => {
        setAge(age + 1)
    }
    
    return (
        <div>
            <h3>{props.lastName}, {props.firstName}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ handleClick }>Birthday button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard