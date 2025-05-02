import React, { useState, useEffect } from "react";

const BudgetListComponent = ({budgetList}) => {

    const [sortedList, setSortedList] = useState([]);
    useEffect(() => {
        setSortedList([...budgetList]);
      }, [budgetList]);

    
    function budgetListSortDate() {
        console.log(budgetList)
        const sorted = [...sortedList].sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedList(sorted);
        console.log(sortedList);
    }

    function budgetListSortName() {
        const sorted = [...sortedList].sort((a, b) => a.name.localeCompare(b.name));
        setSortedList(sorted);
    }


    return (
        <div className=" max-w-5xl mx-auto p-6 rounded-2xl mt-8 space-y-6 bg-slate-200">
            <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-around mb-4">
                    <h1 className="text-2xl font-bold">Current Budgets</h1>
                    <div className="flex-1/3 space-x-4 text-right ">
                        <button onClick={budgetListSortName} className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-100 hover:text-black hover:font-semibold outline-4 outline-black transition hover:scale-105">By name</button>
                        <button onClick={budgetListSortDate} className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-100 hover:text-black hover:font-semibold outline-4 outline-black transition hover:scale-105">By date</button>
                    </div>
                </div>
                
                {sortedList.map((budget, index) => (
                <div key={index} className="flex bg-white hover:bg-yellow-50 transition p-4 rounded-xl border border-gray-200 cursor-pointer">
                    <div className="flex w-full items-center mb-4 mt-2 ml-4" >
                                <div className="flex-1/2 text-left">
                                    <h3 className=" text-xl sixtyfour-convergence-font">{budget.name}</h3>
                                    <p className="mt-3 font-bold">{budget.email}</p>
                                    <p className="mt-3 font-bold">{budget.phone}</p>
                                </div>
                                <div className="flex-1/4 text-left">
                                    <h3 className="font-bold">Selected Services</h3>
                                    <div className="mt-3"> {budget.selectedServices.map((servic, index) => (
                                        <div key={index}> {servic} </div>))}
                                    </div>
                                </div>
                                <div className="flex-1/4 text-right mr-4">
                                    <h3 className=" flex-2/3 font-bold">Total Budget</h3>
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