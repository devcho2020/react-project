import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LeftSide from './components/common/LeftSide';
import RightSide from './components/common/RightSide';

function App() {

  return (
    <div className='flex flex-col min-h-screen min-w-screen'>
      <Header />
      <div className='flex w-full'>
        <LeftSide />

        <main className='flex flex-4'>
          main
        </main>

        <RightSide />
      </div>
      <Footer />
    </div>
  )
}

export default App
