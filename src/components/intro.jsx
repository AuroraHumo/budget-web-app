import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';

const Intro = () => {

    return (
        <div className="flex flex-col sm:flex-row justify-center items-stretch h-screen overflow-hidden">
            <div className="flex-1 flex items-center justify-baseline z-0">
                <img className="rotate-140 max-w-full " src="public/foto.jpg" alt="Intro" />
            </div>
            <div className="flex-1 justify-center items-stretch z-1">
                <div className="flex-1 flex flex-col justify-center text-3xl sm:text-5xl font-honk">
                    <h2>UI/UX Design</h2>
                    <h2>Mobile App Development</h2>
                    <h2>Web Development</h2>
                </div>
                <div className="flex-1 flex justify-center mt-10 sm:mt-30">
                    <Link to="/home">
                        <Button type="button">Discover Our Products!</Button>
                    </Link>
                </div>
            </div>
        </div>

    );

}

export default Intro;