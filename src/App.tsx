import Header from './layout/Header';
import SideBar from './layout/SideBar';
import Revenue from './pages/Revenue';

function App() {
  return (
    <div className='pt-20 w-full'>
      <Header />

      <SideBar />

      <Revenue />
    </div>
  );
}

export default App;
