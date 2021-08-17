import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import ShowIncrement from './ShowIncrement';

const CollbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback(() => {
        setCounter(c => c + 1);
    }, [setCounter]);


    return (
        <>
            <h1>Use Callback Hook {counter}</h1>
            <hr />

            <ShowIncrement handleIncrement={increment} />

        </>
    )
}

export default CollbackHook;
