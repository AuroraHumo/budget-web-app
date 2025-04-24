import React from 'react';

const Home = () => {
    const handleClick = () => {
        alert('Under construction!');
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

export default Home;