import React, { useState } from "react";
import Button from "./button";

const Budgetcomponent = ({ onTotalBudgetChange, setBudgetList, selectedServices }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    const lettersOnly = /^[A-Za-zÀ-ÿ\s]+$/;
    const phonePattern = /^\+?[1-9][0-9]{7,14}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim().match(lettersOnly) || name.trim().length < 3) {
      newErrors.name = "Name not correct. Minimum 3 letters please.";
    }

    if (!phone.match(phonePattern) || phone.length < 3) {
      newErrors.phone = "Phone not correct.";
    }

    if (!email.match(emailPattern)) {
      newErrors.email = "Email not correct.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMessage("");
      return;
    }

    setErrors({});

    const customerInfo = {
      name,
      phone,
      email,
      totalBudget: onTotalBudgetChange,
      selectedServices: selectedServices,
      date: new Date().toLocaleDateString(),
    };
    setBudgetList((prevBudgetList) => [...prevBudgetList, customerInfo]);

    setSuccessMessage("Budget saved successfully!");
    setName("");
    setPhone("");
    setEmail("");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }

  return (
    <div className="flex">
        <div className="flex-1/4"></div>
        <div className="mt-10 flex-1/2 bg-white p-6 rounded-xl border border-gray-200 shadow">
        <form method="post" onSubmit={handleSubmit} className="space-y-4 ">
            <label className="block">
            <input
                name="name"
                value={name}
                id="name"
                type="text"
                placeholder="Full name"
                onChange={(e) => setName(e.target.value)}
                className={`border rounded p-2 w-full ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </label>

            <label className="block">
            <input
                name="phone"
                value={phone}
                id="phone"
                type="text"
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
                className={`border rounded p-2 w-full ${errors.phone ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </label>

            <label className="block">
            <input
                name="email"
                value={email}
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className={`border rounded p-2 w-full ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </label>

            <Button
            >
            Save your budget!
            </Button>

            {successMessage && (
            <p className="text-green-600 text-sm mt-2">{successMessage}</p>
            )}
        </form>
        </div>
        <div className="flex-1/4"></div>
    </div>
);
};

export default Budgetcomponent;
