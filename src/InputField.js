import React from 'react'
import './InputField.css';

export default function InputField(props) {
    const { type, label, readOnly, disabled, name, checked, onChange, style,placeholder,maxLength ,value,errorMsg} = props

    return (
        <div className='inputContainer'>
            <div className='label'>{label}</div>
            <div className={style()}>
                <input
                    type={type}
                    label={label}
                    readOnly={readOnly}
                    disabled={disabled}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    value={value}
                />
                <div>{errorMsg ? <span>{errorMsg}</span>:""}</div>
            </div>
        </div>

    )
}
