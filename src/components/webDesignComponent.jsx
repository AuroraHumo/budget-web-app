import React from "react";
import { useState, useEffect } from "react";

const WebDesignComponent = ({onWebBudgetChange}) => {
    const [inputValuePages, setInputValuePages] = useState(1);
    const [inputValueLanguages, setInputValueLanguages] = useState(1);

    useEffect (() => {
        const budget = (inputValuePages + inputValueLanguages - 2 ) * 30;
        onWebBudgetChange(budget);
    }, [inputValuePages, inputValueLanguages, onWebBudgetChange]);

    return (
        <div>
            <p> How many pages? ( max 50 ) 
                <button onClick={() => { 
                    if (inputValuePages > 1) {
                        setInputValuePages(inputValuePages - 1) 
                    } }}> - </button>
                { inputValuePages }
                <button onClick={() => { 
                    if (inputValuePages < 50) {
                        setInputValuePages(inputValuePages + 1)
                    } }}> + </button>
                
            </p>
            <p> How many languages? ( max 10 ) 
            <button onClick={() => { 
                    if (inputValueLanguages > 1) {
                        setInputValueLanguages(inputValueLanguages - 1) 
                    } }}> - </button>
                { inputValueLanguages }
                <button onClick={() => { 
                    if (inputValueLanguages < 10) {
                        setInputValueLanguages(inputValueLanguages + 1)
                    } }}> + </button>
            </p>
            
        </div>
    );
    }

export default WebDesignComponent;