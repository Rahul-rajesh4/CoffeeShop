import React from 'react'
import './Close.css'
export default function Close() {

    function closediv() {
        document.getElementById('anim').className = 'no';

    }
    return (
        <>
            <button class="button2" onClick={closediv}>
                <span class="X"></span>
                <span class="Y"></span>
                <div class="close">Close</div>
            </button>
        </>
    )
}
