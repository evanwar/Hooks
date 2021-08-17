import React, { memo } from 'react';

const Small = memo(({ value }) => {


    console.log('Llamada a Small');

    return (
        <small>
            {value}
        </small>
    )
})

export default Small;
