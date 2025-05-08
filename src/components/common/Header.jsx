import React from 'react'

const Header = () => {
  return (
    <header className='bg-blue-600 text-white p-4 flex justify-between'>
        <h1 className='text-xl font-bold'>logo?</h1>
        <h1 className='text-xl font-bold'>제목</h1>
        <div className='flex gap-1'>
            <button className='bg-sky-950 w-16 rounded-md'>버튼</button>
            <button className='bg-sky-950 w-16 rounded-md'>버튼</button>
        </div>
    </header>
  )
}

export default Header