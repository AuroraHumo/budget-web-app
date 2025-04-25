import React from 'react';
import { useNavigate } from 'react-router';

const Intro = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    };

    return (
        <div>

            <h2>UI/UX Design</h2>
            <h2>Mobile App Development</h2>
            <h2>Web Development</h2>
            <button onClick={handleClick}>Check our prices!</button>
        </div>
    );
};

export default Intro;