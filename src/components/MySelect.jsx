import React from 'react';
import { useField } from "formik";

const MySelect = ({label, children, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <select {...props} {...field}>
                {children}
            </select>
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};

export default MySelect;