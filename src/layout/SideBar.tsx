import { Invoicing, LinkInBio, MediaKit, Store } from '../components/svg/apps';

const SideBar = () => {
  return (
    <div className='custom-shadow rounded-[20px] p-3 fixed left-4 top-[35%] flex flex-col gap-6'>
      <LinkInBio disabled />
      <Store disabled />
      <MediaKit disabled />
      <Invoicing disabled />
    </div>
  );
};

export default SideBar;
