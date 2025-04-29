import React from 'react';
import { useNavigate } from 'react-router';

const Intro = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    };

    return (
        <div className="flex">
            <div className="flex-1/2 ">
                <img src='public\foto.jpg' />
                
            </div>
            <div className="flex-1/2 text-center justify-center align-middle items-center flex flex-col "> 
                
                <div className='flex-1/2 text-5xl rotate-10 font-honk justify-center align-middle items-center flex flex-col'>
                    <h2>UI/UX Design</h2> 
                    <h2>Mobile App Development</h2>
                    <h2>Web Development</h2>

                </div> 
                <div className='flex-1/4 items-center justify-center align-center flex flex-col'>                       
                    <div>
                    <button onClick={handleClick}           className="bg-black text-white px-6 py-2 rounded-lg hover:bg-sky-900 transition hover:scale-105"
                        >DISCOVER OUR PRODUCTS!</button></div>

                </div>
                <div className='flex-1/4'>
                </div>
                
                
            </div>
        </div>
        
    );
};

export default Intro;