import React from 'react';
import { MdOutlineBathroom } from 'react-icons/md';
import { TbAirConditioning } from "react-icons/tb";
const Facilities = () => {
    return (
        <div>
            <h1>Facilities of Apartments</h1>
            <div>
                <p>
                    <span><TbAirConditioning /></span>
                    <span>Air Condition</span>
                </p>
                <p>
                    <span><MdOutlineBathroom /></span>
                    <span>BathRobe</span>
                </p>
                <p>
                    <span></span>
                    <span>BathRobe</span>
                </p>
            </div>
            <div></div>
        </div>
    );
}

export default Facilities;
