import React from "react";
import styles from "../form/form.module.scss";

export interface FormProps {
    name? : string;
    width? : "width-10" | "width-50" | "width-100" | "width-200" | "width-300" | "width-400" | "width-500";
    color : "primary" | "secondary" | "default";
    size : "small" | "medium" | "large";
    variant : "contained" | "outlined" | "text";//variantとは、ボタンの見た目のこと
    disabled? : boolean;
    fullWidth? : boolean;
    startIcon? : React.ReactNode;
    endIcon? : React.ReactNode;
    onClick? : () => void;
    margin? : string;
    borderRadius? : "border-radius-1" | "border-radius-2" | "border-radius-3" | "border-radius-5" |"border-radius-10" | "border-radius-20";
    backgroundColor? : "background-color-1" | "background-color-2" | "background-color-3" | "background-color-4";
}


export default function Form(props : FormProps) {
    return (
        <>
            <form
                className={`
                    ${props.color ? styles[props.color] : ""}
                    ${props.width ? styles[props.width] : "width-100"}
                    ${props.size ? styles[props.size] : ""}
                    ${props.variant ? styles[props.variant] : ""}
                    ${props.disabled ? styles.disabled : ""}
                    ${props.fullWidth ? styles.fullWidth : ""}
                    ${props.margin ? styles[props.margin] : ""}
                    ${props.borderRadius ? styles[props.borderRadius] : ""}
                    ${props.backgroundColor ? styles[props.backgroundColor] : ""}
                    ${"margin-left: 10px"}
                `}
            >
                <div style={{marginLeft: "10px"}}>
                    {props.name ? props.name : ""}
                </div>
            </form>
        </>
    );
}
