import React from "react";
import { useState } from "react";

import ServicesComponent from "./servicesComponent";
import BudgetListComponent from "./budgetListcomponent";

const Home = () => {
    const [budgetList, setBudgetList] = useState([]);
    return (
        <>
        <ServicesComponent setBudgetList={setBudgetList}/>
        {budgetList.length > 0 &&
        <BudgetListComponent budgetList={budgetList}/>}
        </>
    )
}

export default Home;