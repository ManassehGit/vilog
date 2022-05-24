import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = ({width, classNameAdd}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }
  return (
    <div>
        <img src='viLog.png' alt='ViLog Logo' width={width} className={classNameAdd} onClick={handleClick}/>
    </div>
  )
}

export default Logo