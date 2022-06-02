import { useState } from 'react';
import Veg from './components/Veg';
import Nonveg from './components/Nonveg';
import Smoothies from './components/Smoothies';

import React from 'react'

export default function App() {
    const [state, setState] = useState("");
    return (
        <div>
            <h1> Menu </h1>
            <button className="btn" onClick={() => { setState("Veg") }}> Veg </button>
            <button className="btn" onClick={() => { setState("Nonveg") }}> Nonveg </button>
            <button className="btn" onClick={() => { setState("Smoothies") }}> Smoothies </button>
            {state === "Veg" && <Veg />}
            {state === "Nonveg" && <Nonveg />}
            {state === "Smoothies" && <Smoothies />}
        </div>
    )
}