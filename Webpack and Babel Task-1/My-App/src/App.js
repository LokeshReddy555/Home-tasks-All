import { useState } from 'react';
import Veg from './components/Veg';
import Nonveg from './components/Nonveg';
import Smoothies from './components/Smoothies';

import React from 'react'

export default function App() {
    const [food, setFood] = useState("");
    return (
        <div>
            <h1> Menu </h1>
            <button className="btn" onClick={() => { setFood("Veg") }}> Veg </button>
            <button className="btn" onClick={() => { setFood("Nonveg") }}> Nonveg </button>
            <button className="btn" onClick={() => { setFood("Smoothies") }}> Smoothies </button>
            {food === "Veg" && <Veg />}
            {food === "Nonveg" && <Nonveg />}
            {food === "Smoothies" && <Smoothies />}
        </div>
    )
}