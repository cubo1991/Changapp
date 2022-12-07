import React from "react";
import { SpinnerDotted } from 'spinners-react';
import Style from "./Loading.module.css"

export default function Loading(){

    return (
        <div className={Style.fatherLoading}>
            <SpinnerDotted size={49} thickness={99} speed={100} color="rgba(172, 57, 57, 1)" />
        </div>
    )
}
 