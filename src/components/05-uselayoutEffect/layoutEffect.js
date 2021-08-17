import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../Hooks/useCounter';
import useFetch from '../../Hooks/useFetch';
import '../02-useEffect/effects.css';
import './layout.css';

const LayoutEffect = () => {

    const { increment, counter } = useCounter(1);


    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];

    const pTag = useRef();


    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <>

            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p
                    ref={pTag}
                    className="mb-2">
                    {quote}
                </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>

            <button
                onClick={() => increment(1)}
                className="btn btn-primary">
                Siguiente
            </button>

        </>
    )
}

export default LayoutEffect;
