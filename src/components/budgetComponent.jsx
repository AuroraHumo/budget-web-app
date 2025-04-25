import React from "react";
import { useState } from "react";

//necessito importar preu total(onTotalBudgetChange), serveis contractats.
//necessito exportar dades introduides.

const Budgetcomponent = ({ onTotalBudgetChange }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

   function handleSubmit () {
        const customerInfo = {
            name: name,
            phone: phone,
            email: email,
            totalBudget: onTotalBudgetChange,
        };
        console.log(customerInfo); 
    }

    return (
        <div className="services">
            <h2>Ask for a quote</h2>
            <form method="post" action={handleSubmit}>
                <label htmlFor={name}><input name="name" value={name} id={name}type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/></label>
                <label htmlFor={phone}><input name="phone" value={phone} id={phone} type="number" placeholder="Enter your phone" onChange={(e)=>setPhone(e.target.value)} /></label>
                <label htmlFor={email}><input name="email" value={email}id={email}type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} /></label>
            <button>Send</button>
            </form>
            
        </div>
    );
}
export default Budgetcomponent;

