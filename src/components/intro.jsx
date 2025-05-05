import React from 'react';
import { useNavigate } from 'react-router';
import Button from './button';

const Intro = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    };

    return (
<div className="flex flex-col justify-center items-center h-screen">
  <div className="flex-1 flex items-center justify-center">
    <img className="rotate-180 sm:w-md" src="public/foto.jpg" alt="Intro" />
  </div>

  <div className="flex-1 flex flex-col items-center justify-center text-3xl font-honk">
    <h2>UI/UX Design</h2>
    <h2>Mobile App Development</h2>
    <h2>Web Development</h2>
  </div>

  <div className="flex-1 flex items-start justify-center">
    <Button onClick={handleClick}>Discover Our Products!</Button>
  </div>
</div>

    );

        /* 
        <div className="sm:flex">
            <div className="flex-1/2">
                <img className="max-w-2/3 " src='public\foto.jpg' />

            </div>
            <div className="flex-1/2 text-center justify-center align-middle items-center flex flex-col "> 
                
                <div className='flex-1/2 text-5xl rotate-10 font-honk justify-center align-middle items-center flex flex-col'>
                    <h2>UI/UX Design</h2> 
                    <h2>Mobile App Development</h2>
                    <h2>Web Development</h2>

                </div> 
                <div className='flex-1/4 items-center justify-center align-center flex flex-col'>                       
                    <div>
                    <Button onClick={handleClick}           
                        >DISCOVER OUR PRODUCTS!</Button></div>
                </div>
                <div className='flex-1/4'>
                </div>
                
                
            </div>
        </div> 
        
    );
};*/
    
    }

export default Intro;