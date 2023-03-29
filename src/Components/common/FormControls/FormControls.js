import React from "react";
import styles from "./FormControls.module.css"

const hasError = meta.touched && meta.error;


const FormControl = ({ input, meta, ...props }) => {
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}


export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}