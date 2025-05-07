import React from 'react'

const Header = () => {
  return (
    <header className='bg-blue-600 text-white p-4 flex justify-between'>
        <h1 className='text-xl font-bold'>Hellow</h1>
        <div>
            <button>로그인</button>
        </div>
    </header>
  )
}

export default Header