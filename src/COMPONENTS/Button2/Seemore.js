import React from 'react'
import './see.css'
import { useNavigate } from 'react-router-dom';
export default function Seemore() {

    const navi = useNavigate()
    function go() {
        navi('/menus')
    }
    return (
        <>
            <button className='seemore' onClick={go}> <span>See More</span>
            </button>
        </>
    )
}
