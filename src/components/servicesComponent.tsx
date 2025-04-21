import Services from "../data/services";
import React from "react";
import { useState } from "react";
import '../components/servicesComponent.css';


const ServicesComponent = () => {
        
const [totalBudget, setTotalBudget] = useState(0)
    
    return (
        <div>
            <h2>Services</h2>
            <div>
                {Services.map((service, index) => (
                    service && (
                        <div key={index} className="services">
                            <div>
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                            </div>
                            <div>
                                <h2>{service.price} €</h2>
                            </div>
                            <div>
                                <input type="checkbox" 
                                    onClick={() => setTotalBudget((totalBudget) => totalBudget + service.price )}/> Add to Cart
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


