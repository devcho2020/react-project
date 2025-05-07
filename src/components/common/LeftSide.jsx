import React from 'react'
import { useState, useEffect } from 'react'

const LeftSide = () => {

  // LeftSideBar visible State
  const [isLeftSideBarVisible, setLeftSideBarVisible] = useState(JSON.parse(localStorage.isLeftSideBarVisible) ?? true);

  // LeftSideBar visible toggle
  const toggleLeftSideBar = () => {
    setLeftSideBarVisible(prevState => !prevState);
  }

  // LeftSideBar save isLeftSideBarVisible localStorage
  useEffect(() => {
    localStorage.isLeftSideBarVisible = isLeftSideBarVisible;
  }, [isLeftSideBarVisible])

  return (
    <div className='relative'>
      <button className='absolute bg-gray-100 z-50 w-8' onClick={toggleLeftSideBar}>{isLeftSideBarVisible ? '⬅' : '➡'}</button>

      <aside className={`transition-all duration-300 ease-in-out ${isLeftSideBarVisible ? 'opacity-100 translate-x-0 w-[12vw]' : 'opacity-0 -translate-x-full w-0'} bg-gray-100 border-r h-full`}>
        <div className='p-2'>
          <div className='text-right mt-8 border-b-2'></div>
        </div>
      </aside>
    </div>
  )
}

export default LeftSide