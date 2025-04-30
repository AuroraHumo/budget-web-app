export default function Modal({open, onClose, children}) {
    return ( 
        //backdrop
        <div onClick={onClose}
            className= {`fixed inset-0 justify-center items-center transition-colors bg-opacity-50 z-50 
                ${open ? 'visible' : 'invisible'}`}>
            {/* modal */}
            <div className={`bg-white rounded-xl shadow-lg p-6 transition-all
                ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0 '}`}>
                    <div>'hola jo me muestro tambien'</div>
                    {children}
            </div>
            
        </div>
    )
}  


