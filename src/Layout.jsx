import {Outlet} from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LeftSide from './components/common/LeftSide';
import RightSide from './components/common/RightSide';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex w-full flex-1'>
        <LeftSide />

        <main className='flex-1 p-10'>
          <Outlet />
        </main>

        <RightSide />
      </div>
      <Footer />
    </div>
  )
}

export default Layout;