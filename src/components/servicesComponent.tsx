import Services from "../data/services";
import React from "react";
import { useState } from "react";
import '../components/servicesComponent.css';
import WebDesignComponent from "./webDesigncomponent";

const ServicesComponent = () => {

    const [checkedState, setCheckedState] = useState(
        new Array(Services.length).fill(false)
    );

    const [totalBudget, setTotalBudget] = useState(0)

    const handleOnChange = (position: number) => {
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
    
    return (
        <div>
            <h2>Services</h2>
            <div>
                {Services.map((service, index) => (
                    service && (
                        <div className="services" key={index}>
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
                                <WebDesignComponent/>
                            </div>
                            
                        </div>
                    )
                ))}
                <h2 className="totalBudget">Total budget: {totalBudget} €</h2>
            </div>
        </div>
    )
}

export default ServicesComponent;


