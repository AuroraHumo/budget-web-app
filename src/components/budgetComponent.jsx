import React from "react";
import { useState } from "react";

const Budgetcomponent = ({ onTotalBudgetChange }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [budgetList, setBudgetList] = useState([]);

   function handleSubmit (e) {
        e.preventDefault();
        const customerInfo = {
            name: name,
            phone: phone,
            email: email,
            totalBudget: onTotalBudgetChange,
        };
        setBudgetList((prevBudgetList) => [...prevBudgetList, customerInfo]);

    }

    return (
        <>
        <div className="services">
            <h2>Ask for a quote</h2>
            <form method="post" onSubmit={handleSubmit}>
                <label ><input name="name" value={name} id="name"type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/></label>
                <label ><input name="phone" value={phone} id="phone" type="number" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)} /></label>
                <label ><input name="email" value={email}id="email"type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /></label>
            <button>Send</button>
            </form>
        </div>
        <div className="services">
            <ul>
            {budgetList.map((budget, index) => (
            <li key={index}>
            {budget.name} - {budget.email} - {budget.totalBudget}€
            </li>
            ))}
        </ul>
        </div>
        </>
    );
}
export default Budgetcomponent;

