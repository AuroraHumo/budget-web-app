import Services from "../data/services";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/servicesComponent.css';
import WebDesignComponent from "./webDesignComponent";

const ServicesComponent = () => {

    const [checkedState, setCheckedState] = useState(
        new Array(Services.length).fill(false)
    );

    const [totalBudget, setTotalBudget] = useState(0)
    const [webBudget, setWebBudget] = useState(0)

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState)
    
        const totalPrice = updatedCheckedState.reduce(
        (sum, currentState, index) => {
            if (currentState === true) {

            return sum + (Services[index]?.price);
            }
            return sum;
        },0);
        setTotalBudget(totalPrice);
    };

    const handleWebBudgetChange = (budget) => {
        setWebBudget(budget);
    }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>Services</h2>
            <div>
                {Services.map((service, index) => (
                    service && (
                        <div key={index}>
                        <div className="services" >
                            <div>
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                            </div>
                            <div>
                                <h2>{service.price} €</h2>
                            </div>
                            <div>
                                <input 
                                    type="checkbox" 
                                    name={service.name}
                                    id={index.toString()}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                    
                                /> Add to Cart
                                
                            </div>
                            </div>
        </div>
                            )))}
                        </div>
                        <div className="services-details" >
                            
                            {checkedState[2] && (<WebDesignComponent onWebBudgetChange={handleWebBudgetChange}  />) }
                            
                        </div>
                        <h2 className="totalBudget">Total budget: {totalBudget + webBudget} €</h2>
                        <button onClick={handleClick}>Back to home</button>
                    </div>

    )
}

export default ServicesComponent;


