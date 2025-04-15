import Services from "../data/services";
import React from "react";
import { useState } from "react";

const ServicesComponent = () => {
    
    return (
        <div className="services">
            <h2>Services</h2>
            <ul>
                {Services.map((service, index) => (
                    <li key={index}>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                        <p>Price: ${service.price}</p>
                        <input type="checkbox" /> Add to Cart

                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ServicesComponent;


