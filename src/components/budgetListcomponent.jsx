import React from "react";
import { useState, useEffect } from "react";

const BudgetListComponent = ({ budgetList }) => {


    return (
        <>
        <h2>Budget List</h2>
        <ul>
            {budgetList.map((budget, index) => (
            <li key={index}>
            {budget.name} - {budget.email} - {budget.totalBudget}€
            </li>
            ))}
        </ul>
        </>
    )
}

export default BudgetListComponent;