import { ReactNode, useState } from 'react';
import menu from '../assets/icons/menu.svg';
import {
  BugIcon,
  IntergrationsIcon,
  ReceiptIcon,
  ReferIcon,
  SettingsIcon,
  SignOutIcon,
  SwitchAccountIcon,
} from '../components/svg';
import { useGetUser } from '../../utils/hooks/useGetUser';
import { Loading } from '../components/Loading';

const MenuBar = () => {
  const [open, setOpen] = useState(false);

  const { user, loading: loadingUser } = useGetUser();

  if (loadingUser) return <Loading />;

  return (
    <>
      <div className='flex bg-[#EFF1F6] rounded-[100px] px-2 py-1 gap-2'>
        <button className='avatar rounded-full w-[32px] h-[32px] '>
          <span className='flex justify-center items-center text-[13px] font-semibold text-white'>
            {`${user?.first_name.slice(0, 1)} ${user?.last_name.slice(0, 1)}`}
          </span>
        </button>
        <button onClick={() => setOpen((prev) => !prev)}>
          <img alt='menu' src={menu} />
        </button>
      </div>

      {open && (
        <div className='fixed top-[90px] right-5 bg-white custom-shadow p-4 rounded-[20px] w-[23%] flex flex-col gap-4'>
          <div className='p-2 flex gap-3 items-center'>
            <div className='avatar rounded-full w-[43px] h-[43px] flex justify-center items-center'>
              <span className='text-center flex items-center text-[13px] font-semibold text-white'>
                {`${user?.first_name.slice(0, 1)} ${user?.last_name.slice(
                  0,
                  1
                )}`}
              </span>
            </div>
            <div className=''>
              <h5 className='font-semibold'>{`${user?.first_name} ${user?.last_name}`}</h5>
              <p className='text-sm'>{user?.email}</p>
            </div>
          </div>

          <MenuLink text='Setting'>
            <SettingsIcon />
          </MenuLink>
          <MenuLink text='Purchase History'>
            <ReceiptIcon />
          </MenuLink>
          <MenuLink text='Refer and Earn'>
            <ReferIcon />
          </MenuLink>
          <MenuLink text='Integrations'>
            <IntergrationsIcon />
          </MenuLink>
          <MenuLink text='Report Bug'>
            <BugIcon />
          </MenuLink>
          <MenuLink text='Switch Account'>
            <SwitchAccountIcon />
          </MenuLink>
          <MenuLink text='Sign out'>
            <SignOutIcon />
          </MenuLink>
        </div>
      )}
    </>
  );
};

const MenuLink = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  return (
    <button className='flex gap-4 p-2 items-center'>
      {children}
      <span className='text-[15px'>{text}</span>
    </button>
  );
};

export default MenuBar;
