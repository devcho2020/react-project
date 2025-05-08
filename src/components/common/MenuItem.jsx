import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MenuItem = ({name, path}) => {

  const location = useLocation();
  const navigate = useNavigate();

  const isMenu = path ? true : false;
  const menuClass = isMenu ? path === location.pathname ? 'bg-gray-300' : 'hover:bg-gray-300' : '';

  const goUrl = (path) => {
    navigate(path);
  }

  return (
    <div className={`flex items-center cursor-pointer p-2 rounded-lg ${menuClass}`} onClick={isMenu ? () => goUrl(path) : undefined}>
        <span>{name}</span>
    </div>
  )
}

export default MenuItem