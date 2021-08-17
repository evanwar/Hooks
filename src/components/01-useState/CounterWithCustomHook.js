import React from 'react';
import useCounter from '../../Hooks/useCounter';

import './Counter.css';
const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook:{state}</h1>
            <hr />

            <button onClick={() => decrement()} className="btn btn-danger">-1</button>
            <button onClick={reset} className="btn btn-primary">Reset</button>
            <button onClick={() => increment()} className="btn btn-success">+1</button>

        </>
    )
}

export default CounterWithCustomHook;
