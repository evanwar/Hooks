import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({});
    }

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleClick}>
                Logout
            </button>

        </div>
    )
}

export default AboutScreen;