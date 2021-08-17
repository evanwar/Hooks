import React from 'react';
import '../02-useEffect/effects.css';

const ShowIncrement = ({ handleIncrement }) => {

    console.log('me volvi a incrementar =(');

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => handleIncrement()}
            >+1</button>
        </>
    )
}

export default ShowIncrement;