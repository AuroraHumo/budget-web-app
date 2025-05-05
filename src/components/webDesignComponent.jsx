import React from "react";
import { useState, useEffect } from "react";
import Modal from "./modal";

const WebDesignComponent = ({onWebBudgetChange}) => {
    const [inputValuePages, setInputValuePages] = useState(1);
    const [inputValueLanguages, setInputValueLanguages] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [id, setId] = useState(null);

    useEffect (() => {
        const budget = (inputValuePages + inputValueLanguages - 2 ) * 30;
        onWebBudgetChange(budget);
    }, [inputValuePages, inputValueLanguages, onWebBudgetChange]);


    return (
        <div className="flex">
            <div className="sm:flex-1/2 text-left"></div>
            <div className=" sm:flex-1/2 text-left  hover:bg-yellow-50 transition p-4 rounded-xl border border-gray-200 cursor-pointer bg-white">
                
                <div className="flex w-full items-center mb-8" >
                    <div className="flex-1/2">
                        <p className="flex-3/4 sixtyfour-convergence-font"> How many pages? </p>
                        <p className="font-stretch-extra-condensed"> ( max 50 )</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={() => {setOpenModal(true), setId(1)}}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </div>
                    <div className="flex-1/2 text-right">
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
                <div className="flex mb-8" >
                    <div className="flex-1/2">
                        <p className=" sixtyfour-convergence-font text-sm"> How many Languages? </p>
                        <p> ( max 10 )</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={() => {setOpenModal(true), setId(2)}}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                        </svg>
                    </div>
                    <div className="">
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
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} id={id}></Modal>
        </div>
    );
    }

export default WebDesignComponent;