import React from 'react';
import { useField } from "formik";

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" })
    return (
        <>
            <label className="checkbox">
                <input {...props} {...field} type="checkbox"/>
                {children}
            </label>
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};

export default MyCheckbox;