import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

const RealExampleRef = () => {

    const [show, setShow] = useState(false);



    return (
        <>
            <h1>Real Example</h1>
            <hr />

            {show && <MultipleCustomHooks />}


            <button className="btn btn-success mt-4"
                onClick={() => {
                    setShow(!show);
                }}>
                Show/Hide
            </button>

        </>
    )
}

export default RealExampleRef;
