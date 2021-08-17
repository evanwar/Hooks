import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import useCounter from '../../Hooks/useCounter';
import '../02-useEffect/effects.css';
import Small from './Small';

const MemoHook = () => {

    const { counter, increment } = useCounter(5000);

    const [show, setShow] = useState(true);

 
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <>
            <h1>MemoHook </h1>
            <h3>Counter : <Small value={counter} /> </h3>
            <hr />

            <p>{memoProcesoPesado}</p>

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

export default MemoHook;
