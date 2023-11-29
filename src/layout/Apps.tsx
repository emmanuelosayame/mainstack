import { ReactNode, useState } from 'react';
import apps from '../assets/icons/widgets.svg';
import { ChevronDown } from '../components/svg';
import { Invoicing, LinkInBio, MediaKit, Store } from '../components/svg/apps';

const Apps = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex gap-1 font-semibold rounded-[100px] px-4 py-2 ${
          open ? 'bg-black text-white ' : 'hover:bg-borderGray'
        }`}>
        <span className='flex gap-1'>
          <img
            alt='apps'
            src={apps}
            width={20}
            height={20}
            className='h-[20px] w-[20px]'
          />
          <p>Apps</p>
        </span>

        {open && (
          <span className='flex items-center gap-1 border-l border-l-neutral-700 pl-2 ml-1'>
            <p>Link in Bio</p>
            <ChevronDown fill='white' />
          </span>
        )}
      </button>

      {open && (
        <div
          className='rounded-[20px] bg-white custom-shadow p-4 fixed top-[90px] right-[20%] 
        w-[25%] flex flex-col gap-4'>
          <LinkCard heading='Link in Bio' subHeading='Manage your Link in Bio'>
            <LinkInBio />
          </LinkCard>
          <LinkCard heading='Store' subHeading='Manage your Store Activities'>
            <Store />
          </LinkCard>
          <LinkCard heading='Media Kit' subHeading='Manage your Media Kit'>
            <MediaKit />
          </LinkCard>
          <LinkCard heading='Invoicing' subHeading='Manage your invoices'>
            <Invoicing />
          </LinkCard>
          {/* <LinkCard heading='Bookings' subHeading='Manage your booking'>
            <LinkIcon />
          </LinkCard> */}
        </div>
      )}
    </>
  );
};

const LinkCard = ({
  children,
  heading,
  subHeading,
}: {
  children: ReactNode;
  heading: string;
  subHeading: string;
}) => {
  return (
    <div
      className='rounded-[20px] flex gap-4 items-center p-3
          border border-transparent hover:border-borderGray'>
      <div className='p-3 rounded-xl border w-fit'>{children}</div>
      <div className=''>
        <p className='font-semibold text-black'>{heading}</p>
        <p className='text-sm'>{subHeading}</p>
      </div>
    </div>
  );
};

export default Apps;
