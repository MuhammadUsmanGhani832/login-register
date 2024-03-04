import React from 'react'

const TextInput = (props) => {
    return (
        <>
            <input {...props}></input>
            {props.error && <p className='errorMessage'>{props.errormessage}</p>}
        </>
    )
}

export default TextInput