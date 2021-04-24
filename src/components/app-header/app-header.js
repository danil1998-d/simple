import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts, importants}) => {
    return (
        <div className="app-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
<path d="M37.3284 66.1716C35.7663 67.7337 33.2337 67.7337 31.6716 66.1716L2.82843 37.3284C1.26634 35.7663 1.26634 33.2337 2.82844 31.6716L31.6716 2.82843C33.2337 1.26633 35.7663 1.26633 37.3284 2.82843L66.1716 31.6716C67.7337 33.2337 67.7337 35.7663 66.1716 37.3284L37.3284 66.1716Z" fill="url(#paint0_linear)"/>
<path d="M22.77 30.05L33.81 41.09L55.2 19.7" stroke="#BCE2F9" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="11.04" y1="61.41" x2="59.34" y2="13.11" gradientUnits="userSpaceOnUse">
<stop stop-color="#474A5C"/>
<stop offset="1" stop-color="#4AA3BA"/>
</linearGradient>
</defs>
</svg>
            <h1>My plans</h1>
            <div className="statusfilter">
            <h2>Все | {allPosts}</h2>
            <h2>В процессе | {importants}</h2>
            <h2>Готовы | {liked}</h2> 
            </div>
        </div>
    )
}
export default AppHeader;