import React from "react";

const BudgetListComponent = ({budgetList}) => {
    return (
        <div className=" max-w-5xl mx-auto p-6 rounded-2xl mt-8 space-y-6 bg-slate-200">
            <div className="grid grid-cols-1 gap-4">
        
            <h2> Current Budgets</h2>
            {budgetList.map((budget, index) => (
            <div key={index} className="flex bg-white hover:bg-yellow-50 transition p-4 rounded-xl border border-gray-200 cursor-pointer">
                <div className="flex w-full items-center mb-8" >
                            <div className="flex-1/3 text-left">
                                <h3 className=" text-xl sixtyfour-convergence-font">{budget.name}</h3>
                                <p className="mt-3 font-bold">{budget.email}</p>
                                <p className="mt-3 font-bold">{budget.phone}</p>
                            </div>
                            <div className="flex-1/3 text-center">
                                <h3 className="font-bold">Selected Services</h3>
                                <div className="mt-3"> {budget.selectedServices.map((servic, index) => (
                                    <div key={index}> {servic} </div>))}
                                </div>
                            </div>
                            <div className="flex-1/3 text-right">
                                <h3 className=" flex-2/3 text-right font-bold">Total Budget</h3>
                                <h2 className="mt-3 text-xl sixtyfour-convergence-font">{budget.totalBudget}€</h2>
                            </div>
                            
                            </div>
            
            </div>
            ))}
            </div>
        </div>
    )
}

export default BudgetListComponent;