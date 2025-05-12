import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goUrl } from '../../utils/navigateUtils';

const MenuItem = ({name, path}) => {

  const location = useLocation();
  const navigate = useNavigate();

  const isMenu = path ? true : false;
  const menuClass = isMenu ? path === location.pathname ? 'bg-gray-300' : 'hover:bg-gray-300 cursor-pointer' : '';

  return (
    <div className={`flex items-center p-2 rounded-lg ${menuClass}`} onClick={isMenu ? () => goUrl(navigate, path) : undefined}>
        <span>{name}</span>
    </div>
  )
}

export default MenuItem