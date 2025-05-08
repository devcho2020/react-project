import React from 'react'
import { useState, useEffect } from 'react'
import menuJson from '../../assets/menu.json';

import MenuItem from './MenuItem';

const LeftSide = () => {

  // LeftSideBar visible State
  const [isLeftSideBarVisible, setLeftSideBarVisible] = useState(JSON.parse(localStorage.isLeftSideBarVisible) ?? true);

  // LeftSideBar visible toggle
  const toggleLeftSideBar = () => {
    setLeftSideBarVisible(prevState => !prevState);
  };

  // LeftSideBar save isLeftSideBarVisible localStorage
  useEffect(() => {
    localStorage.isLeftSideBarVisible = isLeftSideBarVisible;
  }, [isLeftSideBarVisible]);

  return (
    <div className='relative'>
      <button className='absolute mt-2 bg-gray-100 z-50 w-8' onClick={toggleLeftSideBar}>{isLeftSideBarVisible ? '⬅' : '➡'}</button>

      <aside className={`transition-all duration-300 ease-in-out ${isLeftSideBarVisible ? 'opacity-100 translate-x-0 w-[12vw]' : 'opacity-0 -translate-x-full w-0'} bg-gray-100 border-r h-full`}>
        <div className='p-2'>
          <div className='text-right border-b-2'>MENU</div>

          <ul className='space-y-4'>
            {menuJson.map((item, index) => (
              <li key={index} className='space-y-2'>
                <MenuItem name={item.name} path={item.path} />
                {item.subMenuItems && item.subMenuItems.length > 0 && (
                  <ul className="pl-6">
                    {item.subMenuItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <MenuItem name={subItem.name} path={subItem.path} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default LeftSide