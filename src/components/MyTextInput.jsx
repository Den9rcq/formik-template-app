import React from 'react';
import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label>{label}</label>
            {
                props.as === "textarea"
                    ? <textarea {...props} {...field}/>
                    : <input {...props} {...field}/>
            }
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};

export default MyTextInput;