import React from "react";

const Input =({label,id,placeHolder,onChange,value}) =>{
    return(
        <div>
            <div className={'modal-input'}>
                <label htmlFor={id}>{label}</label>
                <input
                    type="text"
                    className='form-control'
                    id={id}
                    value={value}
                    placeholder={placeHolder}
                    onChange={onChange}
                    />
            </div>
        </div>
    )
}
export default Input