import React from "react";

const BudgetListComponent = ({budgetList}) => {
    
    return (
        <div >
            <h2> Current Budgets</h2>
            {budgetList.map((budget, index) => (
            <div key={index}>
                <div className="services" >
                            <div>
                                <h3>{budget.name}</h3>
                                <p>{budget.email}</p>
                                <p>{budget.phone}</p>
                            </div>
                            <div>
                                <div>{budget.services}</div>
                            </div>
                            <h2>{budget.totalBudget}€</h2>
                            </div>
            
            </div>
            ))}
        </div>
    )
}

export default BudgetListComponent;