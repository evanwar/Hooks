import React, { useState } from 'react';
import useCounter from '../../Hooks/useCounter';
import '../02-useEffect/effects.css';
import Small from './Small';
function Memorize() {

    const { counter, increment } = useCounter(1);

    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter : <Small value={counter} /> </h1>
            <hr />

            <button
                className="btn btn-primary ml-3"
                onClick={() => increment(1)}
            >+1</button>


            <button
                className="btn btn-primary ml-3"
                onClick={() => {
                    setShow(!show);
                }}>
                Show/Hide {JSON.stringify(show)}</button>

        </>
    )
}

export default Memorize;
