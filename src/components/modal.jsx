export default function Modal({open, onClose, id}) {
    return ( 
        //backdrop
        <div onClick={onClose}
            className= {`fixed z-50 inset-0 justify-center items-center transition-colors backdrop-grayscale-100 flex
                ${open ? 'visible bg-black-20'  : 'invisible'}`}>
            {/* modal */}
            <div onClick={e => e.stopPropagation()} className={`bg-white rounded-xl shadow p-6 transition-all max-w-3/4
                ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0 '}`}>

                    <div className="flex w-full items-center " >
                    <div >
                        <p className="font-bold">That's the amount of {id === 1 && 'pages'}{ id=== 2 && 'languages'} you want your website to have.</p>
                        <p className="flex-3/4 mt-8 text-l sixtyfour-convergence-font">  ONLY 30€ PER EXTRA {id === 1 && 'PAGE!'}{ id=== 2 && 'LANGUAGE!'} </p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}  


