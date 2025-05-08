import { useNavigate } from 'react-router-dom';
import { goUrl } from '../../\butils/navigateUtils';
import logo from '../../images/logo.png';

const Header = () => {

  const navigate = useNavigate();

  return (
    <header className='bg-amber-900 text-white p-4 flex justify-between md:px-20 px-2 items-center'>
        <div className='cursor-pointer' onClick={() => goUrl(navigate, '/')}>
          <img src={logo} className="h-10 object-contain" />
        </div>
        <h1 className='text-xl font-bold'>GAME WORD</h1>
        <div className='flex gap-1'>
            <button className='bg-sky-950 px-5 py-3 rounded-md'>버튼</button>
            <button className='bg-sky-950 px-5 py-3 rounded-md'>버튼</button>
        </div>
    </header>
  )
}

export default Header