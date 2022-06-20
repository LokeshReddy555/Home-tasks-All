import React, { useState, Suspense } from 'react';
//import Headlines from './components/Headlines';
const Headlines = React.lazy(() => import('./components/Headlines'));  //lazy loading

export default function App() {
    const [click, setClick] = useState(false);
    return (
        <div>
            <button className="btn" onClick={() => { setClick(true) }}> Headlines </button>
            {click && <Suspense fallback={<div>Loading...</div>}>
                <Headlines /> </Suspense>}
        </div>
    )
}
