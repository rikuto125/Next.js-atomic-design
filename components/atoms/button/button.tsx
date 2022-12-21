import React from "react";
import styles from "../button/button.module.scss";

export interface ButtonProps {
    name? : string;
    color : "primary" | "secondary" | "default" | "warning";
    size : "small" | "medium" | "large";
    variant : "contained" | "outlined" | "text";//variantとは、ボタンの見た目のこと
    disabled? : boolean;
    fullWidth? : boolean;
    startIcon? : React.ReactNode;
    endIcon? : React.ReactNode;
    onClick? : () => void;
    margin? : string;
    borderRadius? : "border-radius-1" | "border-radius-2" | "border-radius-3" | "border-radius-5" |"border-radius-10" | "border-radius-20";
    backgroundColor? : "background-color-1" | "background-color-2" | "background-color-3" | "background-color-4" | "background-warning";
}


export default function Button(props : ButtonProps) {
    return (
        <>
            <button
                className={`
                    ${props.color ? styles[props.color] : ""}
                    ${props.size ? styles[props.size] : ""}
                    ${props.variant ? styles[props.variant] : ""}
                    ${props.disabled ? styles.disabled : ""}
                    ${props.fullWidth ? styles.fullWidth : ""}
                    ${props.margin ? styles[props.margin] : ""}
                    ${props.borderRadius ? styles[props.borderRadius] : ""}
                    ${props.backgroundColor ? styles[props.backgroundColor] : ""}
                `}
                    >
                <div style={{textAlign: "center",color:"black"}} >
                    {props.name ? props.name : ""}
                </div>
            </button>
        </>
    );
}

