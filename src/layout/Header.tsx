import logo from '../assets/mainstack-logo.svg';
import home from '../assets/icons/home.svg';
import analytics from '../assets/icons/insert_chart.svg';
import revenue from '../assets/icons/payments.svg';
import crm from '../assets/icons/group.svg';
import notifications from '../assets/icons/notifications.svg';
import messages from '../assets/icons/chat.svg';
import Apps from './Apps';
import MenuBar from './MenuBar';

const Header = () => {
  return (
    <div
      className='rounded-[100px] h-16 fixed top-2 inset-x-3 flex items-center px-5 
    justify-between header z-20 bg-white'>
      <img className='' alt='logo' src={logo} />

      <CenterMenus />

      <UserSection />
    </div>
  );
};

const UserSection = () => {
  return (
    <div className='flex items-center gap-5'>
      <button>
        <img alt='notification' src={notifications} />
      </button>
      <button>
        <img alt='messages' src={messages} />
      </button>

      <MenuBar />
    </div>
  );
};

const CenterMenus = () => {
  return (
    <div className='flex gap-10 justify-center items-center text-[#56616B]'>
      <button className='flex gap-1 font-semibold rounded-[100px] px-4 py-2 hover:bg-borderGray'>
        <img
          alt='home'
          src={home}
          width={20}
          height={20}
          className='h-[20px] w-[20px]'
        />
        <p>Home</p>
      </button>

      <button className='flex gap-1 font-semibold rounded-[100px] px-4 py-2 hover:bg-borderGray'>
        <img
          alt='analytics'
          src={analytics}
          width={20}
          height={20}
          className='h-[20px] w-[20px]'
        />
        <p>Analytics</p>
      </button>

      <button className='flex gap-1 font-semibold bg-black text-white rounded-[100px] px-4 py-2'>
        <img
          alt='revenue'
          src={revenue}
          width={20}
          height={20}
          className='h-[20px] w-[20px]'
        />
        <p>Revenue</p>
      </button>

      <button className='flex gap-1 font-semibold rounded-[100px] px-4 py-2 hover:bg-borderGray'>
        <img
          alt='crm'
          src={crm}
          width={20}
          height={20}
          className='h-[20px] w-[20px]'
        />
        <p>CRM</p>
      </button>

      <Apps />
    </div>
  );
};

export default Header;
