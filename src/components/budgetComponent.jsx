import React from "react";
import { useState } from "react";

const Budgetcomponent = ({ onTotalBudgetChange, setBudgetList, selectedServices }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

   function handleSubmit (e) {
        e.preventDefault();
        const customerInfo = {
            name: name,
            phone: phone,
            email: email,
            totalBudget: onTotalBudgetChange,
            selectedServices: selectedServices
        };
        setBudgetList((prevBudgetList) => [...prevBudgetList, customerInfo]);

    }

    return (
        <>
        <div className="mt-17">
            
            <form method="post" onSubmit={handleSubmit}>
                <label ><input name="name" value={name} id="name"type="text" placeholder="Full name" onChange={(e)=>setName(e.target.value)}/></label>
                <label ><input name="phone" value={phone} id="phone" type="number" placeholder="Phone number" onChange={(e)=>setPhone(e.target.value)} /></label>
                <label ><input name="email" value={email}id="email"type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /></label>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-sky-900 transition hover:scale-105">Save your budget!</button>
            </form>
        </div>
        </>
    );
}
export default Budgetcomponent;

