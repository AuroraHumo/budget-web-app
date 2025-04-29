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
        <div className="flex">
            <div className="flex-1/2 text-left"></div>
            <div className=" flex-1/2 text-left  hover:bg-yellow-50 transition p-4 rounded-xl border border-gray-200 cursor-pointer bg-white">
                
                <div className="flex w-full items-center mb-8" >
                    <div >
                        <p className="flex-3/4 text-right text-l sixtyfour-convergence-font"> How many pages? </p>
                        <p className="font-bold"> ( max 50 )</p>
                    </div>
                    <div className="flex-1/4 text-right">
                        <button className=" bg-gray-300
                            w-8 h-8
                            rounded-full
                            m-2
                            hover:bg-blue-300
                            shadow-blue-900
                            shadow-[1px_1px_0px_0px_blue-900]"
                                onClick={() => { 
                                if (inputValuePages > 1) {
                                    setInputValuePages(inputValuePages - 1) 
                        } }}> - </button>
                        { inputValuePages }
                        <button className=" bg-gray-300
                            w-8 h-8 m-2
                            rounded-full
                            hover:bg-blue-300
                            shadow-blue-900
                            shadow-[1px_1px_0px_0px_blue-900]"onClick={() => { 
                                if (inputValuePages < 50) {
                                    setInputValuePages(inputValuePages + 1)
                        } }}> + </button>
                    </div>
                </div>
                <div className="flex w-full items-center mb-8" >
                    <div >
                        <p className="flex-3/4 text-right text-l sixtyfour-convergence-font"> How many Languages? </p>
                        <p className="font-bold"> ( max 10 )</p>
                    </div>
                    <div className="flex-1/4 text-right">
                        <button className=" bg-gray-300
                            w-8 h-8 m-2
                            rounded-full
                            hover:bg-blue-300
                            shadow-blue-900
                            shadow-[1px_1px_0px_0px_blue-900]"
                            onClick={() => { 
                                if (inputValueLanguages > 1) {
                                    setInputValueLanguages(inputValueLanguages - 1) 
                                } }}> - </button>
                        { inputValueLanguages }
                        <button className=" bg-gray-300
                            w-8 h-8 m-2
                            rounded-full
                            hover:bg-blue-300
                            shadow-blue-900
                            shadow-[1px_1px_0px_0px_blue-900]"onClick={() => { 
                                if (inputValueLanguages < 10) {
                                    setInputValueLanguages(inputValueLanguages + 1)
                                } }}> + </button>
                    </div>
                </div>

                {/* <div className="flex w-full items-center mb-8" >
                    <div className="flex-3/4 text-right">
                        <p> How many languages? ( max 10 ) </p>
                    </div>
                    <div className="flex-1/4 text-center">
                    <button onClick={() => { 
                        if (inputValueLanguages > 1) {
                            setInputValueLanguages(inputValueLanguages - 1) 
                        } }}> - </button>
                    { inputValueLanguages }
                    <button onClick={() => { 
                        if (inputValueLanguages < 10) {
                            setInputValueLanguages(inputValueLanguages + 1)
                        } }}> + </button>
                    </div>
                </div> */}
                {/* 
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
                </p> */}
            </div>
        </div>
    );
    }

export default WebDesignComponent;