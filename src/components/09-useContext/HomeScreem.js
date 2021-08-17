import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const HomeScreem = () => {

    const { user } = useContext(UserContext);


    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />


            {JSON.stringify(user, null, 3)}


        </div>
    )
}

export default HomeScreem;
