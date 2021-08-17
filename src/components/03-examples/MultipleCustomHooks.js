import React from 'react';
import useCounter from '../../Hooks/useCounter';
import useFetch from '../../Hooks/useFetch';
import '../02-useEffect/effects.css';

const MultipleCustomHooks = () => {

    const { increment, counter } = useCounter(1);
  

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];

    return (
        <>

            <h1>BreakingBad Quotes</h1>
            <hr />


            {
                loading ? <div className="alert alert-info text-center">
                    Loading...
                </div> :

                    <blockquote className="blockquote text-right">
                        <p className="mb-2">{quote}</p>
                        <footer className="blockquote-footer"> {author}</footer>
                    </blockquote>
            }


            <button
                onClick={() => increment(1)}
                className="btn btn-primary">
                Siguiente
            </button>

        </>
    )
}

export default MultipleCustomHooks;
