import React, { useState, Suspense } from 'react';
//import Headlines from './components/Headlines';
const Headlines = React.lazy(() => import('./components/Headlines'));  //lazy loading

export default function App() {
    const [state, setState] = useState(false);
    return (
        <div>
            <button className="btn" onClick={() => { setState(true) }}> Headlines </button>
            {state && <Suspense fallback={<div>Loading...</div>}>
                <Headlines /> </Suspense>}
        </div>
    )
}
