import Services from "../data/services";
import React from "react";
import { useState } from "react";

import WebDesignComponent from "./webDesignComponent";
import BudgetComponent from "./budgetComponent";

const ServicesComponent = ({ setBudgetList }) => {

    const [checkedState, setCheckedState] = useState(
        new Array(Services.length).fill(false)
    );

    const [totalBudget, setTotalBudget] = useState(0)
    const [webBudget, setWebBudget] = useState(0)
    const [selectedServices, setSelectedServices] = useState([])

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState)

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + (Services[index]?.price);
                }
                setWebBudget(0)
                return sum;

            }, 0);

        const selectedServ = updatedCheckedState.reduce((acc, currentState, index) => {
            if (currentState === true) {
                acc.push(Services[index]?.name);
            }
            return acc;
        }, []);

        setTotalBudget(totalPrice);
        setSelectedServices(selectedServ);
    };

    const handleWebBudgetChange = (budget) => {
        setWebBudget(budget);
    }

    return (
        <div className=" max-w-5xl mx-auto p-4 rounded-2xl sm:mt-8 space-y-6 bg-slate-200">
            <div className="grid grid-cols-1 gap-6">
                {Services.map((service, index) => (
                    service && (
                        <div key={index} className="flex bg-white hover:bg-yellow-50 transition p-2 rounded-xl border border-gray-200 cursor-pointer mr-0">
                            <div className="flex w-full items-center  sm:mb-8" >
                                <div className="flex-3/4 text-left mt-4">
                                    <span className="  sm:text-xl sixtyfour-convergence-font ">{service.name}</span >
                                    <p className="mt-3 ">{service.description}</p>
                                </div>
                                <div className="flex flex-1/4 text-right justify-end">
                                    <h2 className=" flex-2/3 text-right mr-2">{service.price} €</h2>

                                    <label className="flex-1/3 text-center ">
                                        <input
                                            type="checkbox"
                                            name={service.name}
                                            id={index.toString()}
                                            checked={checkedState[index]}
                                            onChange={() => handleOnChange(index)}
                                            className="accent-orange-200 hover:scale-125 transition-transform cursor-pointer"
                                            style={{ width: "20px", height: "20px" }}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    )))}
            </div>
            <div >
                {checkedState[2] && (<WebDesignComponent onWebBudgetChange={handleWebBudgetChange} />)}

            </div>
            {checkedState.some(checked => checked) && (
                <div className="text-right mt-6">
                    <h2 className="mb-4 text-right text-7xl font-honk ">Hey! </h2>
                    <h2 className="mb-4 text-right text-5xl font-honk ">Your total budget is : {totalBudget + webBudget} €</h2>
                    <span></span><h3 className="text-right mt-8 ">Please fill in your contact details below & save your budget!</h3>
                </div>
            )}
            <div >
                {checkedState.some(checked => checked) && (<BudgetComponent onTotalBudgetChange={totalBudget + webBudget} setBudgetList={setBudgetList} selectedServices={selectedServices} />)}
            </div>

        </div>
    );
}

export default ServicesComponent;


